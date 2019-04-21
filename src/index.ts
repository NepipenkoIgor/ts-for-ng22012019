interface IColor {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

class Point {

    public constructor(public x: number, public y: number, public color?: IColor) {
        this.color = this.color || {red: 255, green: 0, blue: 0, alpha: 255};
    }

    public draw(canvas: ImageData): void {
        const index: number = (this.x + this.y * 500) * 4;
        canvas.data[index] = this.color.red;
        canvas.data[index + 1] = this.color.green;
        canvas.data[index + 2] = this.color.blue;
        canvas.data[index + 3] = this.color.alpha;

    }
}

class Line {
    public constructor(private firstPoint?: Point, private secondPoint?: Point, public color?: IColor) {
        this.color = this.color || {red: 255, green: 0, blue: 0, alpha: 255};
    }

    public getPoint(type: string): Point {
        return (type === 'first') ? this.firstPoint : this.secondPoint;
    }

    public setPoint(type: string, point: Point): void {
        (type === 'first') ? this.firstPoint = point : this.secondPoint = point;
    }

    public BRLine(canvasData: ImageData): void {
        const p1: Point = this.firstPoint;
        const p2: Point = this.secondPoint;
        const currentP: Point = jQuery.extend(true, {}, this.firstPoint);
        // длина по горизонтали
        let dX: number = Math.abs(p2.x - p1.x);
        // длина по веритикали
        let dY: number = Math.abs(p2.y - p1.y);
        const s1: number = Math.sign(p2.x - p1.x);
        const s2: number = Math.sign(p2.y - p1.y);
        // меняем переменные местами
        const change: boolean = (dY > dX);
        dX = (change) ? dX * dY / (dY = dX) : dX;
        // ошибка
        let e: number = 2 * dY - dX;
        // основной цикл
        for (let i: number = 0; i < dX; i++) {
            new Point(Math.trunc(currentP.x), Math.trunc(currentP.y), this.color).draw(canvasData);
            while (e >= 0) {
                (change) ? currentP.x += s1 : currentP.y += s2;
                e = e - 2 * dX;
            }
            (change) ? currentP.y += s2 : currentP.x += s1;
            e = e + 2 * dY;
        }
    }

    public CDALine(canvasData: ImageData): void {
        const p1: Point = this.firstPoint;
        const p2: Point = this.secondPoint;
        /*считаем максимальную длину  по вертикали и горизонтали*/
        const l1: number = Math.abs(p2.x - p1.x);
        const l2: number = Math.abs(p2.y - p1.y);
        /*что длинее то и выбираем*/
        const length: number = (l1 >= l2) ? l1 : l2;
        /*считаем на сколько пикселей надо сдвигаться по горизонтали за 1 шаг*/
        const dx: number = (p2.x - p1.x) / length;
        /*считаем на сколько пикселей надо сдвигаться по вертикали за 1 шаг*/
        const dy: number = (p2.y - p1.y) / length;
        /*текущие значения ставим в точку начала*/
        let x: number = p1.x;
        let y: number = p1.y;
        let i: number = 1;
        while (i <= length) {
            new Point(Math.trunc(x), Math.trunc(y), this.color).draw(canvasData);
            x += dx;
            y += dy;
            i += 1;
        }
    }
}

export class DrawClass {
    private readonly ctx: CanvasRenderingContext2D;
    private canvasData: ImageData;

    private readonly canvasWidth: number;
    private readonly canvasHeight: number;
    private line: Line = new Line();
    private alg: string = 'br';

    public constructor(public canvas: HTMLCanvasElement) {
        canvas.addEventListener('mousedown', this.click, false);

        this.ctx = canvas.getContext('2d');
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.canvasData = this.ctx.getImageData(0, 10, this.canvasWidth, this.canvasHeight);
        //  this.canvasDataTmp = this.ctx.getImageData(0, 10, this.canvasWidth, this.canvasHeight);
        window.requestAnimationFrame(() => this.refresh());
    }

    public setAlg(name: string): void {
        this.alg = name;
        console.log(`сменили алгоритм на ${name}`);
    }

    public click = (event: MouseEvent): void => {

        const rect: ClientRect = this.canvas.getBoundingClientRect();
        const pX: number = (event.clientX - rect.left) / rect.width * this.canvas.width;
        const pY: number = (event.clientY - rect.top) / rect.height * this.canvas.height;
        if ((this.line.getPoint('first') && this.line.getPoint('second')) || !this.line.getPoint('first')) {
            this.line.setPoint('first', new Point(pX, pY));
            this.line.setPoint('second', undefined);
        } else {
            this.line.setPoint('second', new Point(pX, pY));
            console.time('test');
            (this.alg === 'br') ? this.line.BRLine(this.canvasData) : this.line.CDALine(this.canvasData);
            this.refresh();
            console.timeEnd('test');
        }

        event.preventDefault();
    };


    //  //-----------------------------------------------
    private refresh(canvas: ImageData = this.canvasData): void {
        this.ctx.putImageData(canvas, 0, 0);
        window.requestAnimationFrame(() => this.refresh());
    }
}

const drClass: DrawClass = new DrawClass(document.getElementById('canvas') as HTMLCanvasElement);

document.getElementById('cda').addEventListener('mousedown', () => {
    drClass.setAlg('cda');
});
document.getElementById('br').addEventListener('mousedown', () => {
    drClass.setAlg('br');
});
