

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
