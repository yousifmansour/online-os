import React from 'react';
import {NavLink} from 'react-router-dom';
import Draggable from 'react-draggable';

import 'system/RecentApps/components/RecentApps.css'

class RecentApps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0
        }
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    handleStop = (e, position, app) => {

        if (position.x > 0 && position.x > window.innerWidth / 2 || position.x < 0 && position.x < -window.innerWidth / 2) {
            console.log(position.x);
            console.log(window.innerWidth);
            setTimeout(() => {
                this
                    .props
                    .closeApp(app);
            }, 50);

        } else 
            this.setState({x: 0});
        }
    
    render() {
        document
            .querySelector('body')
            .scrollTop = 0;

        const recentApps = this
            .props
            .recentApps
            .map((app, i) => (
                <Draggable
                    axis='x'
                    key={i}
                    onStop={(e, p) => this.handleStop(e, p, app)}
                    position={{
                    x: this.state.x,
                    y: 0
                }}>
                    <div>
                        <NavLink exact to={'/' + app} activeClassName="active">
                            <h2>
                                {app}
                            </h2>
                        </NavLink>
                        <button onClick={() => this.props.closeApp(app)}>X</button>
                    </div>
                </Draggable>
            ));

        return (
            <div className='recent-apps'>
                <div className='links'>
                    {recentApps}</div>
            </div>
        );
    }
}

export default RecentApps;