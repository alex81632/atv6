import { ADD_NUMBER, ADD_OPERATOR, CALCULATE_RESULT, CLEAR_ALL } from './actionTypes';

export const addNumber = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const addOperator = (operator) => ({
  type: ADD_OPERATOR,
  payload: operator,
});

export const calculateResult = () => ({
  type: CALCULATE_RESULT,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});
