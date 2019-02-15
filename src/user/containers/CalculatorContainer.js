import React from 'react';
import {connect} from 'react-redux';
import * as calculatorActions from 'actions/calculator';
import {addApp} from 'actions/recentApps';
import Calculator from 'user/components/Calculator';

class CalculatorContainer extends React.Component {
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
            <Calculator
                handleSubmit={this.handleSubmit}
                firstNumber={this.props.firstNumber}
                secondNumber={this.props.secondNumber}
                setFirstNumber={this.props.setFirstNumber}
                setSecondNumber={this.props.setSecondNumber}
                result={this.props.result}/>

        // <form onSubmit={this.handleSubmit} className='calculator-container'>
        // <h2>Calculator that only adds</h2>     <input         type='number'
        // name='firstNumber'         value={this.props.firstNumber} onChange={(e) =>
        // this.props.setFirstNumber(e.target.value)}></input> <input
        // type='number'         name='secondNumber' value={this.props.secondNumber}
        //     onChange={(e) => this.props.setSecondNumber(e.target.value)}></input>
        // <button>get result</button>     <h3 style={{         textAlign: 'center'
        // }}>{this.props.result}</h3> </form>
        );
    }
}

function mapStateToProps(state) {
    return state.calculator;
}

export default connect(mapStateToProps, {
    addApp,
    ...calculatorActions
})(CalculatorContainer);