import test from 'node:test';
import assert from 'node:assert';
import {sum} from './index.js';

test('sum should return correct result when given two numbers', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test('sum should handle negative numbers', () => {
  const result = sum(-2, -3);
  assert.strictEqual(result, -5);
});

test('sum should handle zero', () => {
  const result = sum(0, 5);
  assert.strictEqual(result, 5);
});