/**
 Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.
 */

const spliceFrom: number = 1;

function isInArray<T>(...args: T[]): boolean {
    const [compare]: T[] = args;

    if (!Array.isArray(compare)) {
        return false;
    }

    const compared: T[] = args.splice(spliceFrom, args.length);

    return !Boolean(compared.filter((value: T) => {
        return !compare.includes(value); // что-то братишка tslint не видит методов от Array.prototype с es6+
    }).length);
}

/**
 * 2)
 * Написать функцию summator(), которая суммирует переданые ей аргументы.
 * Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */
type strOrNum = string | number;

function summator(...args: strOrNum[]): number {
    return args.reduce((total: number, amount: strOrNum) => {
        if (typeof amount === 'string') {
            amount = parseInt(amount) ? parseInt(amount) : 0;
        }

        return total + amount;
    }, 0);
}


/**
 * 3)
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 */
type typeOfArgs = string | number | [];

function getUnique(...args: typeOfArgs[]): typeOfArgs[] {
    return args.reduce((prev: typeOfArgs[], current: typeOfArgs) => {
        if (!prev.includes(current)) {
            prev.push(current);
        }

        return prev;
    }, []);
}

/**
 * 4)
 * Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 * возвращает новый массив. Число показывает количество элементов в подмассивах,
 * элементы подмассивов беруться из массива data.
 * Оригинальный массив не должен быть изменен.
 */

// TODO why ?
function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const spliced: T[] = JSON.parse(JSON.stringify(data));

    return data.map<T[] | undefined>((_value: T, index: number) => {
        if (index % rowSize === 0) {
            return spliced.splice(0, rowSize);
        }
        return;
    })
        .filter((value: T[]) => value);
}

/**
 * 5 - debounce
 */

function debounce(ms: number) {
    return function (_target: Object, _methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalDescriptorValue: Function = descriptor.value;
        let timer: null | number = null;

        // tslint:disable-next-line
        descriptor.value = function (...args: any[]) {
            const onComplete: Function = () => {
                timer = null;
                originalDescriptorValue.apply(this, args);
            };

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(onComplete, ms);
        };

        return descriptor;
    };
}

