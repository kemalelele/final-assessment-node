import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should return correct sum for two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('should return 0 if first argument is not a number', () => {
  assert.strictEqual(sum('2', 3), 0);
});

test('should return 0 if second argument is not a number', () => {
  assert.strictEqual(sum(2, '3'), 0);
});

test('should return 0 if both arguments are not numbers', () => {
  assert.strictEqual(sum('2', '3'), 0);
});

test('should return 0 if first argument is negative', () => {
  assert.strictEqual(sum(-2, 3), 0);
});

test('should return 0 if second argument is negative', () => {
  assert.strictEqual(sum(2, -3), 0);
});

test('should return 0 if both arguments are negative', () => {
  assert.strictEqual(sum(-2, -3), 0);
});

test('should handle zero correctly', () => {
  assert.strictEqual(sum(0, 5), 5);
});
