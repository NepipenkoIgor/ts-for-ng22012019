"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var homework_1 = require("./homework");
describe('test IsInArray', function () {
    it('should return true', function () {
        expect(homework_1.isInArray([1, 2, '4', 8, 'test', 1], 'test', 8, '4', 1, 2))
            .toBeTruthy();
    });
    it('should return false', function () {
        expect(homework_1.isInArray([1, 2, '4', 8, 'test'], 'test', 8, 10, '4', 1, 2))
            .toBeFalsy();
    });
});
describe('test getUnique', function () {
    it('should return an array without dups', function () {
        expect(homework_1.getUnique('1', 1, 4, 5, 4, 8, 9, 'test', 'test2', 'test'))
            .toEqual(['1', 1, 4, 5, 8, 9, 'test', 'test2']);
    });
});
describe('test summator', function () {
    it('should calculate a sum', function () {
        expect(homework_1.summator(1, '2', 3.5, '4.5', 0))
            .toBe(11);
    });
    it('should calculate a sum and ignore not number values', function () {
        expect(homework_1.summator(1, '2', 'not a number', 3.5, '4.5'))
            .toBe(11);
    });
});
describe('test toMatrix', function () {
    it('should return a matrix with a certain row size', function () {
        expect(homework_1.toMatrix([1, 2, '3', 4, 5, 6, 7, 8, 9], 2))
            .toEqual([
            [1, 2],
            ['3', 4],
            [5, 6],
            [7, 8],
            [9]
        ]);
    });
});
//# sourceMappingURL=homework.spec.js.map