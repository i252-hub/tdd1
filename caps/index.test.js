const capitalize = require('./index');

test('returns first letter capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');

});

test('throws error for invalid input', () => {
    expect(() => capitalize(2)).toThrow('Invalid Input, Not Capitalized :(');
    });

test('throws error for empty string', () => {
    expect(() => capitalize('')).toThrow('Empty String, Not Capitalized :(');
    });

