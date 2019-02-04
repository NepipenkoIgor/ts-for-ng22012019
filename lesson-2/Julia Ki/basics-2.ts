class A {}
class B {}

// эту фабрику используют для разных ситуаций:
userFactory<B>(B);

type callback<T> = { new(): T; };

function userFactory<T>(type: callback<T>): T {
    return new type(); // тут возвращаем конструктор
}

let a: { new(): A; } = A;
// a(); // происходит с ошибкой
// new a(); //создается новый объект. т.е. то, что и является типом для A

// ------------------

function average(a: number, b?: number, c?: number): string {
    let total: number = a;
    let count: number = 1;
    let count: number = 1;
    if (typeof b !== 'undefined') {
        total += b;
        count++;
    }
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }

    const result: number = total / count;
    return `Àvarage is ${result}`;
}

average(1, 2, 3);
average(1, 2);

average(1, '2', 3);
average(1, 2, 3, 5);

// ----------------

function average2<T>(...args: T[]): string {
    const [a, b, c]: T[] = args;
    const total: number = Number(a) + Number(b) + Number(c);
    const result: number = total / 3;
    return `Àvarage is ${result}`;
}
average2(1);
average2<string>('1', '2');
average2<number>(1, 2);


// -------------------

function average3(a: number, b: number): string;
function average3(a: string, b: number, c: number): string;
function average3(a: number, b: string): string;

type sn = string | number;
// проверка стража типа. если тип val - это string, то возвращаемое значение ф-ии - это string
function isString(val: sn): val is string {
    return typeof val === 'string';
}

// в этой ф-ии обобщение трех предыдущих. Для перегрузок
function average3(_a: sn, _b: sn, _c?: number): sn {

    // страж типа: позволяют разделить по блокам, с каким типом мы сейчас работаем
    // if (typeof _a === 'string') {
    //     parseInt(_a); // is string
    // } else {
    //     // _a. // is number
    // }
    // string or number

    // альтернатива через ф-ю

    if (isString(_a)) {
        parseInt(_a);
    }

    const total: number = parseInt(_a);
    return '';
}

average3(1, 2);
average3(1, 2, 3);
average3(1, '2');
average3('1', 2);


class Point {
    // private виден только внутри самого класса. protected виден внутри наследника
    public constructor (public readonly x: number, protected y: number, private z: number) {}

    public sum(): number {
        return this.x + this.y + this.z;
    }
}

const point: Point = new Point(1, 2, 3);

class P extends  Point {
    public constructor (x: number, y: number, z: number) {
        super (x, y, z);
        // this.y; // тк protected y
    }
}

const point2: P = new P(1, 2, 3);

class Singleton {
    // instance - типа "сущьности" Singleton
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
// так делать нельзя, тк private constructor
let instance: Singleton = new Singleton();

// и Singleton можно создать только с помощью getInstance()
let instance2: Singleton = Singleton.getInstance();


// ------------------


abstract class AbstractPoint {
    public x: number = 0;

    // все то что помечено с abstract - это контракт
    public abstract y: number;
    public abstract sum(): number;

    public getX(): number {
        return this.x;
    }
}

class Point2 extends AbstractPoint {
    public y: number;

    public sum(): number {
        return this.x + this.getX();
    }

}
