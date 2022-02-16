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
});
