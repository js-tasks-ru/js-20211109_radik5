import sum from './index.js';

describe('intro/sum', () => {
  it('should return sum of numbers', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('should return sum of numbers', () => {
    expect(sum(6, 14)).toEqual(20);
  });

  it('should return sum of numbers', () => {
    expect(sum(-6, 14)).toEqual(8);
  });

  it('should return sum of numbers', () => {
    expect(sum(Infinity, 14)).toEqual(Infinity);
  });
  it('should return sum of numbers', () => {
    expect(sum(NaN, 14)).toEqual(NaN);
  });

});
