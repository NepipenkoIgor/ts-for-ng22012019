/*
1)  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.
*/

type anyPrimitive = string | number | boolean;

export function isInArray(a: anyPrimitive[], ...args: anyPrimitive[]): boolean {
    return args.every((elem: anyPrimitive) => {
        return a.includes(elem);
    });
}

// isInArray([1, 2, 3, 's'], 3, 2, 's');
// isInArray([1, 2, 3, 's'], 3, 0, 's');


/*
2)
    Написать функцию summator(), которая суммирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
*/
type stringOrNumb = string | number;

function isStr(val: stringOrNumb): val is string {
    return typeof val === 'string';
}

export function summator(...args: stringOrNumb[]): stringOrNumb {
    return args.reduce(function (
        previousValue: stringOrNumb, currentValue: stringOrNumb): stringOrNumb {

        if (isStr(previousValue)) {
            previousValue = Number(previousValue);
        }
        if (isStr(currentValue)) {
            currentValue = Number(currentValue);
        }
        return previousValue + currentValue;
    });
}

/*
3)
Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.
    */
export function getUnique<T>(...args: T[]): Set<T> {
    return new Set(args);
}


/*
4)
Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
    возвращает новый массив. Число показывает количество элементов в подмассивах,
    элементы подмассивов беруться из массива data.
    Оригинальный массив не должен быть изменен.
*/
export function toMatrix(data: number[], rowSize: number): number[][] {
    return data.map(function (item: number): number[] {
        const newArr: number[] = new Array(rowSize);
        newArr.fill(item);
        return newArr;
    });
}