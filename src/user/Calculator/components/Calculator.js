import React from 'react';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

import './Calculator.css';

const Calculator = ({value, handleChange}) => (
    <div className='calculator-container'>
        <Display value={value}/>
        <ButtonPanel handleChange={handleChange}/>
    </div>
);

export default Calculator;