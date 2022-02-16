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
});
