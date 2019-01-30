//   1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray(checkArr: number[], ...args: number[]): boolean {

    let inArray: boolean = false;

    args.forEach((argItem: number): void => {
        inArray = checkArr.includes(argItem);
    });

    return inArray;
}


// 2) Написать функцию summator(), которая суммирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
type stringOrNumber = string | number;


function summator(...args: stringOrNumber[]): stringOrNumber {
    if (typeof args[0] === 'string') {
        return args.join('');
    } else {
        return args.reduce((prev: stringOrNumber, currentValue: stringOrNumber) => Number(prev) + Number(currentValue));
    }
}

// 3) Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.

function getUnique<T>(...args: T[]): T[] {
    return [...new Set(args)];
}

// 4) Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
// возвращает новый массив. Число показывает количество элементов в подмассивах,
// элементы подмассивов беруться из массива data.
// Оригинальный массив не должен быть изменен.

function toMatrix<T>(data: T[], rowSize: number): T[][] {
    return data.map((elem: T) => {
        const rowArr: T[] = [];
        for (let i: number = 0; i < rowSize; i++) {
            rowArr.push(elem);
        }
        return rowArr;
    });
}