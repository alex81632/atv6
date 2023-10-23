import React from 'react';
import { connect } from 'react-redux';
import Display from './Display';
import Keypad from './Keypad';
import { addNumber, addOperator, calculateResult, clearAll } from '../actions/calculatorActions';

const Calculator = ({ displayValue, addNumber, addOperator, calculateResult, clearAll }) => {

    const handleNumberClick = (number) => {
        addNumber(number);
    };

    const handleOperatorClick = (operator) => {
        addOperator(operator);
    };

    const handleCalculateResult = () => {
        calculateResult();
    };

    const handleClearAll = () => {
        clearAll();
    };

    return (
        <div className="calculator">
        <Display value={displayValue} />
        <Keypad
            onNumberClick={handleNumberClick}
            onOperatorClick={handleOperatorClick}
            onCalculateResult={handleCalculateResult}
            onClearAll={handleClearAll}
        />
        </div>
    );
};

const mapStateToProps = (state) => ({
    displayValue: state.displayValue,
});

const mapDispatchToProps = {
    addNumber,
    addOperator,
    calculateResult,
    clearAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
