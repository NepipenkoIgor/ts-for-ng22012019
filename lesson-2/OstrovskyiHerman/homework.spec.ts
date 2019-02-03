import { isInArray } from './homework';

describe('Test isInArray', () => {
    it('should return true', () => {
        expect(isInArray([1, 2, '4', true], true, '4', 1, 2))
            .toBeTruthy();
    });
    it('should return false', () => {
        expect(isInArray([1, 2, '4', true], 5, true, '4', 1, 2 ))
            .toBeFalsy();
    });
});
