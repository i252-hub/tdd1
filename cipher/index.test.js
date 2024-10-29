const caesarCipher = require('./index'); 

describe('caesarCipher', () => {
    test('shifts letters correctly with positive shift', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('abc', 2)).toBe('cde');
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    test('shifts letters correctly with negative shift', () => {
        expect(caesarCipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
        expect(caesarCipher('cde', -2)).toBe('abc');
        expect(caesarCipher('ABC', -3)).toBe('XYZ');
    });

    test('handles non-alphabetic characters', () => {
        expect(caesarCipher('Hello, World! 123', 3)).toBe('Khoor, Zruog! 123');
        expect(caesarCipher('abc!@#', 2)).toBe('cde!@#');
    });

    test('wraps around the alphabet', () => {
        expect(caesarCipher('z', 1)).toBe('a');
        expect(caesarCipher('a', -1)).toBe('z');
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('ABC', 26)).toBe('ABC'); 
    });
});
