const analyzeArray = require('./index');

describe('analyzeArray', () => {
    test('returns correct values for a normal array', () => {
        const result = analyzeArray(10, 5, 20, 8, 15);
        expect(result).toEqual({
            average: 11.6,
            min: 5,
            max: 20,
            length: 5
        });
    });

    test('returns correct values for an empty array', () => {
        const result = analyzeArray();
        expect(result).toEqual({
            average: null,
            min: null,
            max: null,
            length: 0
        });
    });

    test('returns correct values for a single element array', () => {
        const result = analyzeArray(42);
        expect(result).toEqual({
            average: 42,
            min: 42,
            max: 42,
            length: 1
        });
    });

    test('returns correct values for negative numbers', () => {
        const result = analyzeArray(-10, -5, -20, -8, -15);
        expect(result).toEqual({
            average: -11.6,
            min: -20,
            max: -5,
            length: 5
        });
    });
});
