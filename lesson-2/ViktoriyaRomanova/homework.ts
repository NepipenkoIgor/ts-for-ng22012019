// ** 1 */
type numOrStr = number | string;

export function isInArray(arr: numOrStr[], ...args: numOrStr[]): boolean {
    return args.every((item: numOrStr) => arr.includes(item));
    // Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback
    // вернёт true для каждого элемента arr.
}

// ** 2 */

export function summator(...args: numOrStr[]): number {
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

// ** 3 */
export function getUnique(...arr: numOrStr[]): numOrStr[] {
    return [...new Set([...arr])];
    // Set – коллекция для хранения множества значений, причём каждое значение может
    // встречаться лишь один раз.
}

// ** 4 */
// type numOrStr = number | string;
export function toMatrix(data: numOrStr[], rowSize: number = 1): numOrStr[][] {
    const startarray: numOrStr[] = data.slice();
    const size: number = rowSize;
    const countelement: number = Math.ceil(startarray.length / size);
    const subarray: numOrStr[][] = [];

    for (let i: number = 0; i < countelement; i++) {
        subarray[i] = startarray.slice((i * size), (i * size) + size);
    }

    return subarray;
}