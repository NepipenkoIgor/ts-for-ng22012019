// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.

type sn = string | number;

export function isInArray(arr: sn[], ...args: sn[]): boolean {
    return args.every((elem: sn) => arr.includes(elem));
}

console.log(isInArray([1, 2, 3], 2));
console.log(isInArray([1, 2, 3], 2, 6, 9, 40));
console.log(isInArray(['cat', 'dog', 'bat'], 'po'));


//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
//
export function summator(...args: sn[]): number {
    return args.reduce((acc: number, currVal: sn) => {
        if (typeof currVal === 'string') {
            currVal = parseFloat(currVal);
        }
        return acc + currVal;
    }, 0);
}
console.log(summator(1,2,3,4));


// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.
//
export function getUnique<sn>(...args: sn[]): sn[] {
    return [...new Set<sn>([...args])];
}

console.log(getUnique(2,8,2,9,6,2,5,9,4));
console.log(getUnique('a', 'b', 'a', 'c', 'b'));

// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
// возвращает новый массив. Число показывает количество элементов в подмассивах,
// элементы подмассивов беруться из массива data.
// Оригинальный массив не должен быть изменен.
//
export function toMatrix(data: sn[], rowSize: number): sn[][] {
    const matrix: sn[][] = [];

    data.forEach((_elem: sn, index: number) => {
        if (index % rowSize !== 0) {
            return;
        }
        matrix.push(data.slice(index, index + rowSize));
    });
    return matrix;
}
console.log(toMatrix(['true', 'true', 'false'], 2));
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 3));


