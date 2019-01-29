// type cb<U> = { new(): U; };
//
// function userFactory<T>(type: cb<T>): T {
//     return new type();
// }


// function average(a: number, b: number, c: number): string {
//     const total: number = a + b + c;
//     const result: number = total / 3;
//     return `Average is ${result}`;
// }
//
// let res: string = average(1, 2, 3);
// average(1, '2', 3);
// average(1, 4);
// average(1, 2, 3, 5);

// function average(a: number, b?: number, c?: number): string {
//     let total: number = a;
//     let count: number = 1;
//     if (typeof b !== 'undefined') {
//         total += b;
//         count++;
//     }
//
//     if (typeof c !== 'undefined') {
//         total += c;
//         count++;
//     }
//     const result: number = total / count;
//     return `Average is ${result}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 3);

/*function average(a: number, b: number = 0, c: number = 0): string {
    const total: number = a + b + c;
    const count: number = 3;
    const result: number = total / count;
    return `Average is ${result}`;
}

average(1);
average(1, 2);
average(1, 2, 3);*/

// function average<T>(...args: T[]): string {
//     const [a, b, c]: T[] = args;
//     const total: number = Number(a) + Number(b) + Number(c);
//     const count: number = 3;
//     const result: number = total / count;
//     return `Average is ${result}`;
// }
//
// average(1, 1, 1);
// average<string>('1', '2');
// average<number>(1, 2, 3);
// type stringOrNumber = string | number;


// function isString(val: stringOrNumber): val is string {
//     return typeof val === 'string';
// }
//
// //
// function average(a: number, b: number): string;
// function average(a: string, b: number, c: number): string;
// function average(a: number, b: string): number;
// function average(_a: stringOrNumber, _b: stringOrNumber, _c?: number): stringOrNumber {
//     // Without true implementation
//
//     // if (isString(_a)) {
//     //     parseInt(_a); // is string
//     // } else {
//     //     _a. // is number
//     // }
//
//     // string | number
//     return '';
// }
//
// average(1, 2);
// average(1, 2, 3);
// average(1, '2');
// average(new String('1'), 2, 3);

// interface IPoint {
//     x: number;
// }
//
// class Point implements IPoint {
//     public constructor(
//         public readonly x: number,
//         protected y: number,
//         private z: number,
//     ) {
//
//     }
//
//     public sum(): number {
//         return this.x + this.y + this.z;
//     }
// }

//
// const point: Point = new Point(1, 2, 3);
//
// class P extends Point {
//     public constructor(x: number, y: number, z: number) {
//         super(x, y, z);
//         this.
//     }
// }
// const point2: P = new P(1, 2, 3);
// point2.

// class Singleton {
//     private static instance: Singleton;
//
//     private constructor() {}
//
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
//
// let instance: Singleton =  Singleton.getInstance();


// abstract class AbstractPoint {
//     public x: number = 0;
//     public abstract y: number;
//
//     public abstract sum(): number;
//
//     public getX(): number {
//         return this.x;
//     }
// }
//
// const a = new AbstractPoint()
// class Point extends AbstractPoint {
//     public y: number = 2;
//
//     public sum(): number {
//         return this.x + this.getX();
//     }
// }


class MathLib {

    @logMethod
    public areaOfCircle(r: number): number {
        return Math.PI * r ** 2;
    }
}

function logMethod(_target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalDescriptorValue: Function = descriptor.value;
    return {
        ...descriptor,
        // tslint:disable-next-line
        value: (...args: any[]) => {

            const strArgs: string = args
            // tslint:disable-next-line
                .map((arg: any) => JSON.stringify(arg))
                .join();
            // tslint:disable-next-line
            const result: any = originalDescriptorValue(...args);
            const r: string = JSON.stringify(result);
            // tslint:disable-next-line
            console.log(`Call: ${methodName} (${strArgs}) => ${r}`);
            return result;
        }
    };
}

const lib: MathLib = new MathLib();

// tslint:disable-next-line
console.log(lib.areaOfCircle(10));

// tslint:disable-next-line
console.log(lib.areaOfCircle(2));