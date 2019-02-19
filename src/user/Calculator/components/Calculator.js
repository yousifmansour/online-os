import React from 'react';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

import './Calculator.css';

const Calculator = ({value, clickHandler}) => (
    <div className='calculator-container'>
        <Display value={value}/>
        <ButtonPanel clickHandler={clickHandler}/>
    </div>
);

export default Calculator;