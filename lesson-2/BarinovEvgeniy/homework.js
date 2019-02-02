"use strict";
/**
 1)
 Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.
 **/
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function isInArray(arr) {
    var targets = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        targets[_i - 1] = arguments[_i];
    }
    return targets.every(function (item) { return arr.includes(item); });
}
exports.isInArray = isInArray;
/**
 2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 **/
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (res, value) {
        value = typeof (value) === 'string'
            ? parseFloat(value)
            : value;
        if (isNaN(value)) {
            value = 0;
        }
        return res + value;
    }, 0);
}
exports.summator = summator;
/**
 * 3)
 Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.
 */
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __spread(new Set(__spread(args)));
    // return args.filter((item: stringOrNumber, i: number, _args: stringOrNumber[]) => {
    //     return i === _args.indexOf(item);
    // });
}
exports.getUnique = getUnique;
/**
 * 4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
 */
function toMatrix(data, rowSize) {
    var matrix = [];
    data.forEach(function (_value, index) {
        if (index % rowSize !== 0) {
            return;
        }
        matrix.push(data.slice(index, index + rowSize));
    });
    return matrix;
}
exports.toMatrix = toMatrix;
/**
 * 5)* https://learn.javascript.ru/task/debounce
 */
// export class MathLib {
//
//     @debounce(1000)
//     @throttle(2000)
//     public areaOfCircle(r: number): void {
//         console.log(Math.PI * r ** 2);
//     }
//
// }
// function debounce(ms: number): Function {
//     return (
//         _target: Object,
//         _methodName: string,
//         descriptor: PropertyDescriptor
//     ): PropertyDescriptor => {
//         const originalDescriptorValue: Function = descriptor.value;
//
//         let timer: number | null = null;
//
//         function decorated(...args: any[]): void {
//             if (timer) {
//                 clearTimeout(timer);
//             }
//
//             timer = setTimeout(() => {
//                 timer = null;
//                 originalDescriptorValue.apply(_target, args);
//             }, ms);
//         }
//
//         return {
//             ...descriptor,
//             value: decorated
//         };
//     };
// }
/**
 * 6)* https://learn.javascript.ru/task/throttle
 */
// function throttle(ms: number): Function {
//     return (
//         _target: Object,
//         _methodName: string,
//         descriptor: PropertyDescriptor
//     ): PropertyDescriptor => {
//         const originalDescriptorValue: Function = descriptor.value;
//
//         let isWaiting: boolean = false;
//         let lastArgs: any[];
//
//         function decorated(...args: any[]): void {
//             if (isWaiting) {
//                 lastArgs = args;
//                 return;
//             }
//
//             originalDescriptorValue.apply(_target, args);
//             isWaiting = true;
//
//             setTimeout(() => {
//                 isWaiting = false;
//                 if (lastArgs.length) {
//                     decorated.apply(_target, lastArgs);
//                     lastArgs = [];
//                 }
//             }, ms);
//         }
//
//         return {
//             ...descriptor,
//             value: decorated
//         };
//
//     };
// }
/**
 * checking
 */
// var math = new MathLib();
//
// var i = 1;
//
// var interval = setInterval(() => {
//     math.areaOfCircle(i);
//     i++;
// }, 100);
//
// setTimeout(() => clearInterval(interval), 10000);
//# sourceMappingURL=homework.js.map