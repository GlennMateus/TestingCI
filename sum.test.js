const sum = require('./sum');


test('return to be number', () => {
    expect(typeof (sum(1, 2))).toBe('number');
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});