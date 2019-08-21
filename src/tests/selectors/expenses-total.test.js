import React from 'react';
import { shallow } from 'enzyme';
import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';



//should return 0 if no expenses
test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

//should correctly add up a single expense
test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

//should correctly add up multiple expenses

test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});