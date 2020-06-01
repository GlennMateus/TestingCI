const { sum, prod } = require('./sum');


test('return to be number', () => {
    expect(typeof (sum(1, 2))).toBe('number');
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('return to be number', () => {
    expect(typeof (prod(1, 2))).toBe('number');
});

test('adds 1 * 2 to equal 2', () => {
    expect(prod(1, 2)).toBe(2);
});