
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray<T>(arr: T[], ...args: T[]): boolean {
    let result: boolean = true;

    args.forEach(element => {
        if (arr.indexOf(element) < 0) {
            result = false;
        }
    });

    return result;
}

console.log(isInArray([1, 'a', true, null], 1, 'a', null, true));  // true
console.log(isInArray([1, 'a', true, null], 1, 'a', null, false)); // false

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type stringOrNumber = string | number;

function summator(...args: stringOrNumber[]): stringOrNumber {
    let result: number = 0;

    args.forEach(element => {
        if (typeof element === 'number') {
            result += element;
        } else {
            isNaN(+element) ? result += 0 : result += +element;
        }
    });

    return result;
}

console.log(summator(1, '2'));       // 3
console.log(summator(1, '2', 'b'));  // 3

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

type G = number | string | boolean | null | undefined;

function getUnique(...args: G[]): G[] {
    let result: Array<G> = [];

    args.forEach(element => {
        if (result.indexOf(element) < 0) result.push(element);
    });

    return result;
}

console.log(getUnique(1, '1', 2, 2, '1', null));  // [ 1, '1', 2, null ]

// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов берутся из массива data.
//  Оригинальный массив не должен быть изменен.

type M = G | G[];

function toMatrix(data: G[], rowSize: number): M[] {
    let result:  Array<M> = [],
        row:     Array<G> = [],
        counter: number = 0;
    if (rowSize <= 0) {
     return  result;
    }

    data.forEach(element => {
        if (counter < rowSize) {
            row.push(element);
            counter++;
        } else {
            result.push(row);
            row = [];
            row.push(element);
            counter = 1;
        }
    });

    result.push(row);

    return result;
}

console.log(toMatrix([1, 2, 3, 4], 2))   // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(toMatrix([1, '2', 3, 4], 3)) // [ [ 1, '2', 3 ], [ 4 ] ]