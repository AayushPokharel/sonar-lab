const { calculateTotal } = require('../src/discount');

test('member receives 15% discount above 100', () => {
  expect(calculateTotal(200, true)).toBe(170);
});

test('member receives 10% discount at or below 100', () => {
  expect(calculateTotal(80, true)).toBe(72);
});

test('non-member receives 5% discount above 100', () => {
  expect(calculateTotal(200, false)).toBe(190);
});

test('non-member receives no discount at or below 100', () => {
  expect(calculateTotal(80, false)).toBe(80);
});