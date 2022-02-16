import operate from '../logic/operate';

const assert = require('assert');

describe('Test the operate functionnality', () => {
  const numberOne = 2;
  const numberTwo = 2;
  const operation = '+';

  it('operate(2,2,+) should return a string.', () => {
    assert(typeof operate(numberOne, numberTwo, operation) === 'string');
  });

  test('operate(2,2,+) should return 4', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operation = '+';
    const result = '4';

    expect(operate(numberOne, numberTwo, operation)).toEqual(result);
  });
  test('operate(2,2,-) should return 0', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operation = '-';
    const result = '0';

    expect(operate(numberOne, numberTwo, operation)).toEqual(result);
  });
  test('operate(2,2,x) should return 4', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operation = 'x';
    const result = '4';

    expect(operate(numberOne, numberTwo, operation)).toEqual(result);
  });
  test('operate(2,2,÷) should return 1', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operation = '÷';
    const result = '1';

    expect(operate(numberOne, numberTwo, operation)).toEqual(result);
  });

  test('operate(2,2,%) should return 0', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operation = '%';
    const result = '0';

    expect(operate(numberOne, numberTwo, operation)).toEqual(result);
  });

  test("operate(2,0,÷) should return Can't divide by 0.", () => {
    const numberOne = 2;
    const numberTwo = 0;
    const operation = '÷';

    const result = "Can't divide by 0.";

    expect(operate(numberOne, numberTwo, operation)).toEqual(result);
  });

  test("operate(2,0,%) should return Can't find modulo as can't divide by 0.", () => {
    const numberOne = 2;
    const numberTwo = 0;
    const operation = '%';

    const result = "Can't find modulo as can't divide by 0.";

    expect(operate(numberOne, numberTwo, operation)).toEqual(result);
  });

  test('operate(2,2,*) should throws an error.', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operation = '*';

    expect(() => operate(numberOne, numberTwo, operation)).toThrow();
  });
});
