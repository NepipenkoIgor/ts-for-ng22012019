
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

export function isInArray<T>(arr: T[], ...args: T[]): boolean {
    let result: boolean = true;

    args.forEach((element: T) => {
        if (arr.indexOf(element) < 0) {
            result = false;
        }
    });

    return result;
}

// console.log(isInArray([1, 'a', true, null], 1, 'a', null, true));  // true
// console.log(isInArray([1, 'a', true, null], 1, 'a', null, false)); // false


// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type stringOrNumber = string | number;

export function summator(...args: stringOrNumber[]): stringOrNumber {
    let result: number = 0;

    args.forEach((element: stringOrNumber) => {
        if (typeof element === 'number') {
            result += element;
        } else {
            isNaN(+element)
                ? result += 0
                : result += +element;
        }
    });

    return result;
}

// console.log(summator(1, '2'));       // 3
// console.log(summator(1, '2', 'b'));  // 3


// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

export function getUnique(...args: stringOrNumber[]): stringOrNumber[] {
    return [...new Set([...args])];
}

// console.log(getUnique(1, '1', 2, 2, '1'));  // [ 1, '1', 2 ]


// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов берутся из массива data.
//  Оригинальный массив не должен быть изменен.

export function toMatrix(data: stringOrNumber[], rowSize: number): stringOrNumber[][] {
    const result: stringOrNumber[][] = [];

    data.forEach((_element: stringOrNumber, index: number) => {
       if (index % rowSize !== 0) {
           return;
       }
       result.push(data.slice(index, index + rowSize));
    });

    return result;
}

// console.log(toMatrix([1, 2, 3, 4], 2));   // [ [ 1, 2 ], [ 3, 4 ] ]
// console.log(toMatrix([1, '2', 3, 4], 3)); // [ [ 1, '2', 3 ], [ 4 ] ]