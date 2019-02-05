import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('Test isInArray', () => {
    it('Should return true', () => {
        expect(isInArray([1, 2, '4', true], 1, 2, '4', true)).toBeTruthy();
    });

    it('Should return false', () => {
        expect(isInArray([1, '2', false], 1, 2)).toBeFalsy();
    });

    it('Should return true', () => {
        expect(isInArray([1, '2', false], 1, '2', false)).toBeTruthy();
    });
});


describe('Test summator', () => {
    it('Should return 10', () => {
        expect(summator(1, 3, '6')).toBe(10);
    });

    it('Should return 16', () => {
        expect(summator('11', 2, '3')).toBe(10);
    });

    it('Should return only one argument 3', () => {
        expect(summator('3')).toBe(3);
    });
});


describe('Test getUnique', () => {
    it('should return true if result array has unique items', () => {
        expect(getUnique(1, 2, 3, 1, '2', '3'))
            .toEqual([1, 2, 3, '2', '3']);
    });
});


describe('Test toMatrix', () => {

    it('should return matrix', () => {
        expect(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
            .toEqual([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]);
    });

});