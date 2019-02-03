import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('Test isInArray', () => {
    it('should return true', () => {
        expect(isInArray([1, 2, '4'], '4', 1))
            .toBeTruthy();
    });
    it('should return false', () => {
        expect(isInArray([1, 2, '4'], 5, '4', 1, 2 ))
            .toBeFalsy();
    });
});

describe('Test summator', () => {
    it('should be true', () => {
        expect(summator(1, 5, 4))
            .toBeTruthy();
    });
    it ('should return false', () => {
        expect(summator('true', 'false'))
            .toBeFalsy();
    });
});

describe('Test toMatrix', () => {
    it('should be true', () => {
        expect(toMatrix([1, 2, 3, 4, 5, 6, 7], 3))
            .toBeTruthy();
    });

    it('should be false', () => {
        // have no idea
    });
});

// don't work
describe('Test getUnique', () => {
    it('should be true', () => {
        expect(getUnique('lala', 'haha', '2', 'haha', 'lala'))
            .toBeTruthy();
    });
    it ('should be false', () => {
        // have no idea
    });
});
