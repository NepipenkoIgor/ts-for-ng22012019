import { getUnique, isInArray, Primitive, summator, toMatrix } from './index';


describe('isInArray', () => {
    const arr: Primitive[] = [1, 2, 3, false, 4, '5', true];
    it('should return true', () => {
        expect(isInArray(arr, 1, 1, 2, 4, false, '5', 3))
            .toBeTruthy();
    });
    it('should return false', () => {
        expect(isInArray(arr, 1, 1, 9))
            .toBeFalsy();
    });
});

describe('summator', () => {
    it('should be 10', () => {
        expect(summator(1, 2, '3', 4))
            .toBe(10);
    });
});

describe('getUnique', () => {
    it('should return true if result array has unique items', () => {
        expect(getUnique([1, 1, 333, 3, 33, 333, 'a', 1, 'a', 'c', false, true, false]))
            .toEqual([1, 333, 3, 33, 'a', 'c', false, true]);
    });
});

describe('toMatrix', () => {
    const arr: Primitive[] = [1, 2, 3, 4, 5, true, '5', 7];
    const resultFor3: Primitive[][] = [
        [1, 2, 3],
        [4, 5, true],
        ['5', 7]
    ];
    it('should return true if Equal', () => {
        expect(toMatrix(arr, 3))
            .toEqual(resultFor3);
    });
    it('should return true if not Equal', () => {
        expect(toMatrix(arr, 4))
            .not
            .toEqual(resultFor3);
    });
});