import React from 'react';
import './Calculator.css';

const Calculator = ({
    handleSubmit,
    firstNumber,
    secondNumber,
    setFirstNumber,
    setSecondNumber,
    result
}) => (
    <div className='calculator-container'>
        <form onSubmit={handleSubmit}>
            <h2>Calculator that only adds</h2>
            <input
                type='number'
                name='firstNumber'
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}></input>
            <input
                type='number'
                name='secondNumber'
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}></input>
            <button>get result</button>
            <h3 style={{
                textAlign: 'center'
            }}>{result}</h3>
        </form>
    </div>
);

export default Calculator;