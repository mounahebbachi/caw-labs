const { first, last, concatenate, chunk } = require('./arrayFunctions');

describe('first function', () => {
    test('returns the first n elements of an array', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });
    test('returns an empty array if n is 0 or negative', () => {
        expect(first([1, 2, 3], 0)).toEqual([]);
        expect(first([1, 2, 3], -1)).toEqual([]);
    });
    test('returns the first element if n is not provided', () => {
        expect(first([1, 2, 3])).toBe(1);
    });
});

describe('last function', () => {
    test('returns the last n elements of an array', () => {
        expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
    });
    test('returns an empty array if the input array is null', () => {
        expect(last(null)).toEqual([]);
    });
    test('returns the last element if n is not provided', () => {
        expect(last([1, 2, 3])).toBe(3);
    });
});

describe('concatenate function', () => {
    test('concatenates all elements of an array into a string', () => {
        expect(concatenate(["Mouna", "Zino", "Rami", "Sami"])).toBe("MounaZinoRamiSami");
    });
    test('returns an empty string for an empty array', () => {
        expect(concatenate([])).toBe('');
    });
});

describe('chunk function', () => {
    test('divides an array into sub-arrays of a predefined size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
    test('returns the entire array as one chunk if size is greater than array length', () => {
        expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });
    test('returns an empty array if the input array is empty', () => {
        expect(chunk([], 2)).toEqual([]);
    });
});
