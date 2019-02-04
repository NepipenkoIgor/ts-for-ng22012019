// ** 1 */
type numOrStr = number | string;

function isInArray(arr: numOrStr[], ...args: numOrStr[]): boolean {
    return args.every((item: numOrStr) => arr.includes(item));
    // Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback
    // вернёт true для каждого элемента arr.
}

let arra: boolean = isInArray([1, 2], 1, 2, 3);
// tslint:disable-next-line:no-console
console.log(arra);

let arrastr: boolean = isInArray(['str', 'page', 'sun'], 'max', 'str', 'sun');
// tslint:disable-next-line:no-console
console.log(arrastr);

// ** 2 */
// type numOrStr = number | string;

function summator(...args: numOrStr[]): number {
    return args.reduce(
        (sum: number, val: numOrStr): number => {
            val = typeof (val) === 'string'
                ? parseFloat(val)
                : val;
            return sum + val;
        }, 0
    );
    // Метод «arr.reduce(callback[, initialValue])» используется для последовательной
    // обработки каждого элемента массива с сохранением промежуточного результата.
}

let s: number = summator(1, 2, 3, 4, 5);
// tslint:disable-next-line:no-console
console.log(s);

// ** 3 */
// type numOrStr = number | string;
function getUnique(...arr: numOrStr[]): numOrStr[] {
    return [...new Set([...arr])];
    // Set – коллекция для хранения множества значений, причём каждое значение может
    // встречаться лишь один раз.
}

let u: numOrStr[] = getUnique('set', 1, 34, 'node', 1, 34, 5, 'js', 1);
// tslint:disable-next-line:no-console
console.log(u);

// ** 4 */
// type numOrStr = number | string;
function toMatrix(data: numOrStr[], rowSize: number = 1): numOrStr[][] {
    const startarray: numOrStr[] = data.slice();
    const size: number = rowSize;
    const countelement: number = Math.ceil(startarray.length / size);
    const subarray: numOrStr[][] = [];

    for (let i: number = 0; i < countelement; i++) {
        subarray[i] = startarray.slice((i * size), (i * size) + size);
    }

    return subarray;
}

let m: numOrStr[][] = toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
// tslint:disable-next-line:no-console
console.log(m);