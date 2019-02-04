import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('Test isInArray', () => {
    it('Should return true', () => {
        expect(isInArray([1, 2, '4', true], 1, 2, '4', true)).toBeTruthy();
    });

    it('Should return false', () => {
        expect(isInArray([1, 2, '4', true], 1, 2, '4', true, 5)).toBeFalsy();
    });

    it('Should return true', () => {
        expect(isInArray([1, 2, false], 1, 2)).toBeTruthy();
    });
});


describe('Test summator', () => {
    it('Should return 10', () => {
        expect(summator(1, 3, '6')).toBe(10);
    });

    it('Should return 6 with only one string argument', () => {
        expect(summator('6')).toBe(6);
    });
});

describe('Test summator', () => {
    it('Should return 10', () => {
        expect(summator(1, 3, '6')).toBe(10);
    });

    it('Should return 6 with only one string argument', () => {
        expect(summator('6')).toBe(6);
    });
});


describe('getUnique', () => {
    it('should return true if result array has unique items', () => {
        expect(getUnique(true, false, 1, '1', true, 56, null, 56, null))
            .toEqual([true, false, 1, '1', 56, null]);
    });
});


describe('toMatrix', () => {

    it('should return matrix', () => {
        expect(toMatrix([1, 2, true, 'Hello'], 3))
            .toEqual([
                [1, 1, 1],
                [2, 2, 2],
                [true, true, true],
                ['Hello', 'Hello', 'Hello']
            ]);
    });

});