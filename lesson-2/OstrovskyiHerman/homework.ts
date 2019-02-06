// //   1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// //   Возвращает true, если все аргументы, кроме первого входят в первый.
// //   Первым всегда должен быть массив.
//
type stringOrNumber = string | number;
type primitive = stringOrNumber | boolean | null | undefined;

export function isInArray(checkArr: primitive[], ...args: primitive[]): boolean {
    return args.every((argument: primitive) => checkArr.includes(argument));
}
//
//
// // 2) Написать функцию summator(), которая суммирует переданые ей аргументы.
// // Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
//
//
export function summator(...args: stringOrNumber[]): stringOrNumber {
    return args.reduce(
        (res: number, value: stringOrNumber): number => {
            value = typeof (value) === 'string' ? parseFloat(value) : value;
            return res + value;
        }, 0
    );
}
//
// // 3) Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// // и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// // Порядок элементов результирующего массива должен совпадать с порядком,
// // в котором они встречаются в оригинальной структуре.
//
export function getUnique(...args: primitive[]): primitive[] {
    return [...new Set(args)];
}
//
// // 4) Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
// // возвращает новый массив. Число показывает количество элементов в подмассивах,
// // элементы подмассивов беруться из массива data.
// // Оригинальный массив не должен быть изменен.
//
export function toMatrix<T>(data: T[], rowSize: number): T[][] {
    return data.map((elem: T): T[] => {
        const rowArr: T[] = [];
        for (let i: number = 0; i < rowSize; i++) {
            rowArr.push(elem);
        }
        return rowArr;
    });
}
//
// // 5) https://learn.javascript.ru/task/debounce
//
//
// function debounceMethod(timer: number = 500): Function {
//     return function (_target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//         const originalDescriptorValue: Function = descriptor.value;
//         // tslint:disable-next-line
//         console.log(`${methodName} methos needs to be debounced`);
//         return {
//             ...descriptor,
//             value: debounce(originalDescriptorValue, timer)
//         };
//     };
// }

// function debounce(f: Function, ms: number): Function {
//
//     let timer: number | null = null;
//     // tslint:disable-next-line
//     return function (...args: any): void {
//         // tslint:disable-next-line
//         const onComplete: Function = () => {
//             // tslint:disable-next-line
//             f.apply(this, args);
//             // tslint:disable-next-line
//             timer = null;
//         };
//
//         if (timer) {
//             clearTimeout(timer);
//         }
//
//         timer = setTimeout(onComplete, ms);
//     };
// }
// // 6) https://learn.javascript.ru/task/throttle
//
// function throttleMethod(timer: number = 500): Function {
//     return function (_target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//         const originalDescriptorValue: Function = descriptor.value;
//         // tslint:disable-next-line
//         console.log(`${methodName} methos needs to be throttled`);
//         return {
//             ...descriptor,
//             value: throttle(originalDescriptorValue, timer)
//         };
//     };
// }
//
// function throttle(func: Function, ms: number): Function {
//
//     let isThrottled: boolean = false;
//     // tslint:disable-next-line
//     let savedArgs: any;
//     // tslint:disable-next-line
//     let savedThis: any;
//
//     function wrapper(): void {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             // tslint:disable-next-line
//             savedThis = this;
//             return;
//         }
//         // tslint:disable-next-line
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function (): void {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//
//     return wrapper;
// }
// //
//
// class MathLib {
//     @throttleMethod(1000)
//     public sayHello(name: string): void {
//         // tslint:disable-next-line
//         console.log(`Hello ${name}`);
//     }
//
//
//     @debounceMethod(5000)
//     public areaOfCircle(r: number): number {
//         // tslint:disable-next-line
//         console.log('Debounced!!!');
//         return Math.PI * r ** 2;
//     }
// }
//
// // tslint:disable-next-line
// const aoc: MathLib = new MathLib();
// aoc.areaOfCircle(5);
// const ml: MathLib = new MathLib();
//
// const interval: number = setInterval(ml.sayHello, 100);
//
// setTimeout(function (): void {
//     clearInterval(interval);
// }, 5000);
// //
// // // RUN in terminal:
// // // npx ts-node --project lesson-2/OstrovskyiHerman/tsconfig.json  lesson-2/OstrovskyiHerman/homework.ts