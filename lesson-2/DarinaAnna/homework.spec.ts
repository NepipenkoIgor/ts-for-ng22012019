import { getUnique, isInArray, summator, toMatrix } from './homework';

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

describe('Test summator', () => {
    it('Should return 2', () => {
        expect(summator(1, 1)).toBe(2);
    });
    it('Should return 11', () => {
        expect(summator(1, '10')).toBe(11);
    });
});

describe('Test getUnique', () => {
    it('Should return unique primitives', () => {
        expect(getUnique([4798543, 34, 34, 4798543, '404', '404', undefined, null, null, undefined, false, false]))
            .toEqual([4798543, 34, '404', undefined, null, false]);
    });
});

describe('Test toMatrix', () => {
    it('Should return matrix 2x3', () => {
        expect(toMatrix([1, true, '2', false, false, 34], 3))
            .toEqual([[1, true, '2'], [false, false, 34]]);
    });
    it('Should return matrix with 1 row', () => {
        expect(toMatrix([1, 2, 3, 4], 5))
            .toEqual([[1, 2, 3, 4]]);
    });
});
