import {describe, it, expect } from 'vitest';

function add (a, b) {
  return a + b;
}

describe('学习vitest测试', () => {
  it('测试test函数', () => {
    expect(add(1,2)).toBe(3);

  })
})