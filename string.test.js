const obj = require('./string');

const { stringLength, strReverse, calc, capitalize } = obj;

test('string Length', () => {
  expect(stringLength('Hello')).toBeTruthy();
});

test('Reversed string', () => {
  const str = 'hello';
  const reverse = str.split('').reverse().join('');
  expect(strReverse(str)).toBe(reverse);
});

describe('Calculator', () => {
  const { add, subtract, multiply, division } = calc;
  test('adding values', () => {
    const sum = 3 + 4;
    expect(add(3, 4)).toBe(sum);
  });

  test('subtracting', () => {
    const val = 7 - 4;
    expect(subtract(7, 4)).toBe(val);
  });

  test('multiplying', () => {
    const val = 7 * 4;
    expect(multiply(7, 4)).toBe(val);
  });

  test('dividing', () => {
    const val = 7 / 4;
    expect(division(7, 4)).toBe(val);
  });
});

test('capitalize', () => {
  const str = 'first';
  expect(capitalize(str)).toBe(str.charAt(0).toUpperCase());
});
