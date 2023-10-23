import { ADD_NUMBER, ADD_OPERATOR, CALCULATE_RESULT, CLEAR_ALL } from '../actions/actionTypes';

const initialState = {
    displayValue: '0',
    operator: null,
    prevValue: null,
};

const calculatorReducer = (state = initialState, action) => {
    const { displayValue, operator, prevValue } = state;
    switch (action.type) {
        case ADD_NUMBER:
            const number = action.payload.toString();

            let newDisplayValue = displayValue === '0' ? number : displayValue + number;

            return {
                ...state,
                displayValue: newDisplayValue,
            };

        case ADD_OPERATOR:
            const newOperator = action.payload;

            if (operator && prevValue) {
                const result = performCalculation(prevValue, displayValue, operator);
                return {
                    ...state,
                    displayValue: result.toString(),
                    operator: newOperator,
                    prevValue: result,
                };
            } else {
                return {
                    ...state,
                    operator: newOperator,
                    prevValue: parseFloat(displayValue),
                    displayValue: '0',
                };
            }

        case CALCULATE_RESULT:
            if (operator && prevValue) {
                const result = performCalculation(prevValue, displayValue, operator);
                return {
                ...state,
                displayValue: result.toString(),
                operator: null,
                prevValue: null,
                };
            }
            return state;

        case CLEAR_ALL:
            return initialState;

        default:
            return state;
    }
};

const performCalculation = (prevValue, currentValue, operator) => {
    switch (operator) {
      case '+':
        return prevValue + parseFloat(currentValue);
      case '-':
        return prevValue - parseFloat(currentValue);
      case '*':
        return prevValue * parseFloat(currentValue);
      case '/':
        return prevValue / parseFloat(currentValue);
      default:
        return currentValue;
    }
  };

export default calculatorReducer;