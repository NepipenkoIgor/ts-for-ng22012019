import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('test IsInArray', () => {
   it('should return true', () => {
       expect(isInArray([1, 2, '4', 8, 'test', 1], 'test', 8, '4', 1, 2))
           .toBeTruthy();
   });

   it('should return false', () => {
       expect(isInArray([1, 2, '4', 8, 'test'], 'test', 8, 10, '4', 1, 2))
           .toBeFalsy();
   });
});

describe('test getUnique', () => {
   it('should return an array without dups', () => {
      expect(getUnique('1', 1, 4, 5, 4, 8, 9, 'test', 'test2', 'test'))
          .toEqual(['1', 1, 4, 5, 8 , 9, 'test', 'test2']);
   });
});

describe ('test summator', () => {
   it('should calculate a sum', () => {
      expect(summator(1, '2', 3.5, '4.5', 0))
          .toBe(11);
   });

    it('should calculate a sum and ignore not number values', () => {
        expect(summator(1, '2', 'not a number', 3.5, '4.5'))
            .toBe(11);
    });
});

describe('test toMatrix', () => {
   it('should return a matrix with a certain row size', () => {
      expect(toMatrix([1, 2, '3', 4, 5, 6, 7, 8, 9], 2))
          .toEqual([
              [1, 2],
              ['3', 4],
              [5, 6],
              [7, 8],
              [9]
          ]);
   });
});

