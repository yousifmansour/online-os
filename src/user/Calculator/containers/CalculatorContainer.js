import React from 'react';
import {connect} from 'react-redux';
import * as calculatorActions from 'actions/calculator';
import {addApp} from 'actions/recentApps';
import Calculator from 'user/Calculator/components/Calculator';

import calculate from "../logic/calculate";

class CalculatorContainer extends React.Component {
    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);
    }

    handleChange = buttonName => {
        let newCalculatorState = calculate({
            total: this.props.total,
            next: this.props.next,
            operation: this.props.operation
        }, buttonName);
        this
            .props
            .setTotal(newCalculatorState.total);
        this
            .props
            .setNext(newCalculatorState.next);
        this
            .props
            .setOperation(newCalculatorState.operation);
    };

    render() {
        return (<Calculator
            value={this.props.next || this.props.total || "0"}
            handleChange={this.handleChange}/>);
    }
}

function mapStateToProps(state) {
    return state.calculator;
}

export default connect(mapStateToProps, {
    addApp,
    ...calculatorActions
})(CalculatorContainer);