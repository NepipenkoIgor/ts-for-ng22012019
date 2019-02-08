import { isInArray } from './homework';
import { summator } from './homework';
import { getUnique } from './homework';
import { toMatrix } from './homework';

describe('Test isInArray', () => {
    it('should return true', () => {
        expect(isInArray([1, 2, '4'], '4', 1, 2))
            .toBeTruthy();
            // значение должно быть верно
    });
    it('should return false', () => {
        expect(isInArray([1, 2, '4'], 5, '4', 1, 2 ))
            .toBeFalsy();
            // значение должно быть не верно
    });
});

describe('Test summator', () => {
    it('should return summ number', () => {
        expect(summator(1, 2, 3, 4, 5))
            .toBe(15);
            // строгое равенство
    });
    it('should return summ string', () => {
        expect(summator(1, '2', '3', 4, 5))
            .toBe(15);
            // строгое равенство
    });
});

describe('Test getUnique', () => {
    it('should return unique array of numbers', () => {
        expect(getUnique(1, 2, 3, 4, 2, 3, 1, 1, 1)).toEqual([1, 2, 3, 4]);
        // сравнение переменных и объектов (включая содержимое)
    });
    it('should return unique array of strings', () => {
        expect(getUnique(1, 2, '2', '3', 4, 5)).toEqual([1, 2, '2', '3', 4, 5]);
        // сравнение переменных и объектов (включая содержимое)
    });
});

describe('Test toMatrix', () => {
    it('should return new array of numbers', () => {
        expect(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
        // сравнение переменных и объектов (включая содержимое)
    });
    it('should return new array of strings', () => {
        expect(toMatrix(['hello', 'world', 'hi', 'people'], 2)).toEqual([['hello', 'world'], ['hi', 'people']]);
        // сравнение переменных и объектов (включая содержимое)
    });
});