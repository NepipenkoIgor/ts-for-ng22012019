import { Homework } from './homework';

const HW: Homework = new Homework();
describe('test inArray', () => {

    beforeEach(() => {
    });


    it('should return true', () => {
        expect(HW._isInArray([1, 2, 3], 1)).toEqual(true);
    });
});