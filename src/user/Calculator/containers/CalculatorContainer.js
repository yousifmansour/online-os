import React from 'react';
import {connect} from 'react-redux';
import * as calculatorActions from 'actions/calculator';
import {addApp} from 'actions/recentApps';
import Calculator from 'user/Calculator/components/Calculator';

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

    // handleSubmit = (e) => {     e.preventDefault();     const result =
    // +this.props.firstNumber + + this.props.secondNumber;     this         .props
    //        .setResult(result); }

    // handleClick = buttonName => {
    //     this.setState(calculate(this.state, buttonName));
    // };

    render() {
        return (<Calculator value={0} clickHandler={() => null}/>);
    }
}

function mapStateToProps(state) {
    return state.calculator;
}

export default connect(mapStateToProps, {
    addApp,
    ...calculatorActions
})(CalculatorContainer);