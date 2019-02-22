import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
    handleClick = buttonName => {
        this
            .props
            .handleChange(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="7" clickHandler={this.handleClick}/>
                    <Button name="4" clickHandler={this.handleClick}/>
                    <Button name="1" clickHandler={this.handleClick}/>
                    <Button name="." clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="8" clickHandler={this.handleClick}/>
                    <Button name="5" clickHandler={this.handleClick}/>
                    <Button name="2" clickHandler={this.handleClick}/>
                    <Button name="0" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="9" clickHandler={this.handleClick}/>
                    <Button name="6" clickHandler={this.handleClick}/>
                    <Button name="3" clickHandler={this.handleClick}/>
                    <Button name="=" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="AC" clickHandler={this.handleClick} orange/>
                    <Button name="÷" clickHandler={this.handleClick} orange/>
                    <Button name="x" clickHandler={this.handleClick} orange/>
                    <Button name="-" clickHandler={this.handleClick} orange/>
                    <Button name="+" clickHandler={this.handleClick} orange/>
                </div>
            </div>
        );
    }
}
ButtonPanel.propTypes = {
    handleChange: PropTypes.func
};
export default ButtonPanel;
