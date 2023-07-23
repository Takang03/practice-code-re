import { difference } from './difference.js';

describe('Test Suite', () => {
  it('Test 1', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
});
