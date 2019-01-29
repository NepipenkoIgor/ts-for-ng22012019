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

