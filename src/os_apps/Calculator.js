import './Calculator.css';

import React from 'react';
import {connect} from 'react-redux';

import * as calculatorActions from '../actions/calculator';
import {addApp} from '../actions/recentApps';
import NavBar from '../NavBar';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.name = 'calculator';
    }

    componentDidMount() {
        this
            .props
            .addApp(this.name);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const result = +this.props.firstNumber + + this.props.secondNumber;
        this
            .props
            .setResult(result);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='calculator-container'>
                <NavBar/>
                <h2>Calculator that only adds</h2>
                <input
                    type='number'
                    name='firstNumber'
                    value={this.props.firstNumber}
                    onChange={(e) => this.props.setFirstNumber(e.target.value)}></input>
                <input
                    type='number'
                    name='secondNumber'
                    value={this.props.secondNumber}
                    onChange={(e) => this.props.setSecondNumber(e.target.value)}></input>
                <button>get result</button>
                <h3 style={{
                    textAlign: 'center'
                }}>{this.props.result}</h3>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return state.calculator;
}

export default connect(mapStateToProps, {
    addApp,
    ...calculatorActions
})(Calculator);