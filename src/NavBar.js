import React from 'react';
import './NavBar.css';

import {withRouter} from "react-router";

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar-container'>
                <nav>
                    <button onClick={() => this.props.history.goBack()}>back</button>
                    <button onClick={() => this.props.history.push('/')}>home</button>
                </nav>
            </div>
        );
    };
}

export default withRouter(NavBar);
