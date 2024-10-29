const {add, multiply, subtract, divide} = require('./index');


test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });

test('subtracts 1 - 2 to equal 1', () => {
    expect(subtract(1, 2)).toBe(-1);
  });

test('multiply 3 * 3 to equal 9', () => {
    expect(multiply(3, 3)).toBe(9);
  });

test('divide 25 / 5 to equal 9', () => {
    expect(divide(25, 5)).toBe(5);
  });

