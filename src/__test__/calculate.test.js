import calculate from '../logic/calculate';

let inputs = {
  total: null, // the running total
  next: null, // the next number to be operated on with the total
  operation: null, // the operator
};

describe('Calculator Test', () => {
  it('Testing the sum operation', () => {
    inputs = {
      total: 3,
      next: 4,
      operation: '+',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('7');
  });

  it('Testing the substraction operation', () => {
    inputs = {
      total: 5,
      next: 4,
      operation: '-',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('1');
  });

  it('Testing the multiplication operation', () => {
    inputs = {
      total: 2,
      next: 4,
      operation: 'x',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('8');
  });

  it('Testing the division operation', () => {
    inputs = {
      total: -15,
      next: 3,
      operation: '÷',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('-5');
  });

  it('Testing the modulus operation', () => {
    inputs = {
      total: 13,
      next: 3,
      operation: '%',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('1');
  });

  it('Testing the result of +/- button', () => {
    inputs = {
      total: 3,
      next: 23,
      operation: '-',
    };
    const { next } = calculate(inputs, '+/-');
    expect(next).toBe('-23');
  });

  it('Testing the AC button', () => {
    inputs = {
      total: 1,
      next: 2,
      operation: '+',
    };
    const next = calculate(inputs, 'AC');
    expect(next).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('1 + 1 = should return 2', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    // Step 1 : click on '1'
    let button = '1';

    let result = {
      total: null,
      next: '1',
    };

    let calculateResult = calculate(obj, button);

    expect(calculateResult).toEqual(result);

    // Step 2 : click on '+'
    button = '+';

    result = {
      total: '1',
      next: null,
      operation: '+',
    };

    calculateResult = calculate(calculateResult, button);

    expect(calculateResult).toEqual(result);

    // Step 3 : click on '1'
    button = '1';

    result = {
      total: '1',
      next: '1',
      operation: '+',
    };

    calculateResult = calculate(calculateResult, button);

    expect(calculateResult).toEqual(result);

    // Step 4 : click on '='

    button = '=';

    result = {
      total: '2',
      next: null,
      operation: null,
    };

    calculateResult = calculate(calculateResult, button);
    expect(calculateResult).toEqual(result);
  });
});
