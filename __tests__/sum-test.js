jest.dontMock('../src/sum');
jest.dontMock('fs');
jest.dontMock('path');

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    var sum = require('../src/sum');
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 3 + 4 to equal 7', function() {
    var sum = require('../src/sum');
    expect(sum(3, 4)).toBe(7);
  });
});
