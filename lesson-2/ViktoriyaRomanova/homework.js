"use strict";
function isInArray(arr, ...args) {
    console.log('Массив: ' + arr + ' , элементы: ' + args);
    let element;
    let typeel;
    let res;
    for (let i = 0; i < args.length; i++) {
        element = args[i];
        switch (typeof element) {
            case 'number':
                typeel = 'число';
                break;
            case 'string':
                typeel = 'строка';
                break;
            case 'boolean':
                typeel = 'boolean';
                break;
            default:
                typeel = 'спецтип';
        }
        if (arr.indexOf) {
            res = arr.indexOf(element);
            if (res === -1) {
                console.log(element + ' - нет такого элемента в массиве...');
                return false;
            }
            else {
                console.log('Элемент типа <' + typeel + '>, с индексом ' + i + ' и значением (' + element + ') найден');
            }
        }
    }
    return true;
}
let a = isInArray([1, true, false, 'angular'], true, 'angular');
console.log(a);
console.log('-------------------------');
let arra = isInArray([1, 2], 1, 2, 3);
console.log(arra);
console.log('-------------------------');
let arrastr = isInArray(['str', 'page', 'sun'], 'max', 'str', 'sun');
console.log(arrastr);
console.log('-------------------------');
let ar = isInArray([1, true, 'sds'], 1, 2, false);
console.log(ar);
console.log('-------------------------');
function summator(...args) {
    return args.reduce((sum, val) => {
        val = typeof (val) === 'string'
            ? parseFloat(val)
            : val;
        return sum + val;
    }, 0);
}
let s = summator(1, 2, 3, 4, 5);
console.log(s);
function getUnique(...arr) {
    return [...new Set([...arr])];
}
let u = getUnique('set', 1, 34, 'node', 1, 34, 5, 'js', 1);
console.log(u);
function toMatrix(data, rowSize = 1) {
    const startarray = data.slice();
    const size = rowSize;
    const countelement = Math.ceil(startarray.length / size);
    const subarray = [];
    for (let i = 0; i < countelement; i++) {
        subarray[i] = startarray.slice((i * size), (i * size) + size);
    }
    return subarray;
}
let m = toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
console.log(m);
//# sourceMappingURL=homework.js.map