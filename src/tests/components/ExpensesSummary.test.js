import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';



//test with snapshot
test('should render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
  expect(wrapper).toMatchSnapshot();

});    

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={400} />);
  expect(wrapper).toMatchSnapshot();

});   
 
