import { isInArray, summator, getUnique, toMatrix } from './homework';

describe('Testing isInArray', () => {
    it('#isInArray should return true on valid args', () => {
        expect(isInArray([1, 'a', true, null], 1, 'a', null, true))
            .toBeTruthy();
    });
    it('It should return false on invalid args', () => {
        expect(isInArray([1, 'a', true, null], 1, 'a', null, false))
            .toBeFalsy();
    });
});

describe('Testing summator', () => {
    it('should return correct sum on number args', () => {
        expect(summator(1, 2))
            .toEqual(3);
    });
    it('should return correct sum on string args', () => {
        expect(summator('1', '2'))
            .toEqual(3);
    });
    it('should return correct sum on mixed args', () => {
        expect(summator(1, '2'))
            .toEqual(3);
    });
    it('should eliminate unconvertabe args and return correct sum on mixed args', () => {
        expect(summator(1, '2', 'b'))
            .toEqual(3);
    });
});

describe('Testing getUnique', () => {
    it('should return an array of unique values correctly ordered', () => {
        expect(getUnique(1, '1', 2, 2, '1'))
            .toEqual([1, '1', 2]);
    });
});

describe('Testing toMatrix', () => {
    it('should return subarrays with 2 elements in each', () => {
        expect(toMatrix([1, 2, 3, 4], 2))
            .toEqual([ [ 1, 2 ], [ 3, 4 ] ]);
    });
    it('should return subarrays with 3 elements in each + the rest of the elements', () => {
        expect(toMatrix([1, '2', 3, 4], 3))
            .toEqual([ [ 1, '2', 3 ], [ 4 ] ]);
    });
    it('should return the subarray itself as the first element if its length is not big enough', () => {
        expect(toMatrix([1, '2', 3, 4], 5))
            .toEqual([[ 1, '2', 3, 4 ]]);
    });
    it('should return an empty array if the last argument is less than 1', () => {
        expect(toMatrix([1, '2', 3, 4], 0))
            .toEqual([]);
    });
});