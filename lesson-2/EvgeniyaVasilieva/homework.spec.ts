import { isInArray, summator, getUnique, toMatrix } from './homework';

describe('Test isInArray', () => {
    it('should return true', () => {
        expect(isInArray([1, 2, '4', true], true, '4', 1, 2))
            .toBeTruthy();
    });
    it('should return false', () => {
        expect(isInArray([1, 2, '4', true], 5, true, '4', 1, 2))
            .toBeFalsy();
    });
});

describe('Test Summator', () => {
    it('should return: 6', () => {
        expect(summator(1, 2, 3))
            .toEqual(6);
    });
    it('should return: 8', () => {
        expect(summator(1, 2, '4', '0'))
            .toEqual(7);
    });
});

describe('Test toMatrix', () => {
    it('should return: [[1, 1, 1], [2, 2, 2], [3, 3, 3]', () => {
        expect(toMatrix([1, 2, 3], 3))
            .toEqual([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
    });
    it('should return: [[1, 1], [2, 2], [3, 3]]', () => {
        expect(toMatrix([1, 2, 3], 2))
            .toEqual([[1, 1], [2, 2], [3, 3]]);
    });
});

describe('Test getUnique', () => {
    it('should return: [1, 2, 3]', () => {
        expect(getUnique(1, 2, 3, 1, 3, 1, 1))
            .toEqual(new Set([1, 2, 3]));
    });
    it('should return: [1, 2, 0, 5]', () => {
        expect(getUnique(1, 2, 0, 2, 5))
            .toEqual(new Set([1, 2, 0, 5]));
    });
});
