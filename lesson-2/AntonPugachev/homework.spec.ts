import { Homework } from './homework';

const HW: Homework = new Homework();
// ***********************************************************************************************************
describe('test inArray --- ', () => {
    it('проверка целые числа  -  true', () => {
        expect(HW._isInArray([1, 2, 3], 1)).toEqual(true);
    });
    it('проверка смешанные типы  -  false', () => {
        expect(HW._isInArray(['1', 2, true], true, '2', '')).toEqual(false);
    });
    it('проверка смешанные типы  -  true', () => {
        expect(HW._isInArray(['1', '2', true], true, '2')).toEqual(true);
    });
    /* todo: странно что работает type customType = string | number | boolean ; */
    it('проверка на  null - true', () => {
        expect(HW._isInArray([null, 2, 3], null)).toEqual(true);
    });
    it('проверка пустой массив - false', () => {
        expect(HW._isInArray([null, 2, 3], undefined)).toEqual(false);
    });

});
// ***********************************************************************************************************
describe('test summator --- ', () => {
    it('проверка смешанные типы  -  false', () => {
        expect(HW._summator('1', 1, 2, 3)).toEqual(7);
    });
    it('проверка на  null - error', () => {
        expect(HW._summator('1', null, 2, 3)).toEqual(null);
    });
    it('проверка на не число - error', () => {
        expect(HW._summator('1', '!!!', 2, 3)).toEqual(null);
    });

});
// ***********************************************************************************************************
describe('test summator --- ', () => {
    it('проверка смешанные типы  -  true', () => {
        expect(HW._getUnique('1', 1, 2, 3, 1, 1, 2, 3)).toEqual(['1', 1, 2, 3]);
    });
    it('проверка на null   -  true', () => {
        expect(HW._getUnique('1', null, 2, 3, 1, 1, 2, 3)).toEqual(['1', null, 2, 3, 1]);
    });

});
// ***********************************************************************************************************
describe('test _toMatrix --- ', () => {

    // const error: Error = new Error('не верный тип');
    it('проверка общая  -  true', () => {
        expect(HW._toMatrix(['1', 1, 2], 2)).toEqual([['1', 1]]);
    });
    it('проверка общая  -  true', () => {
        expect(HW._toMatrix(['1', 1, 2, 1, 1, 1, 1, null], 4)).toEqual([['1', 1, 2, 1], [1, 1, 1, null]]);
    });


});

