var toBengaliNum = require('./index');
var msg = 'Invalid input type';

test('1 should be converted to ১', () => {
  expect(toBengaliNum(1)).toBe('১');
});

test('"123" should be converted to ১২৩', () => {
  expect(toBengaliNum('123')).toBe('১২৩');
});

test('1.2 should be converted to ১.২', () => {
  expect(toBengaliNum(1.2)).toBe('১.২');
});

test('-1.2 should be converted to -১.২', () => {
  expect(toBengaliNum(-1.2)).toBe('-১.২');
});

test('1.a should return to ' + msg, () => {
  expect(toBengaliNum('1.a')).toBe(msg);
});
