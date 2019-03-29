import React from 'react';
import {NavLink} from 'react-router-dom';
import Draggable from 'react-draggable';
import './RecentAppItem.css';

class RecentAppItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            axis: 'x',
            mode: null
        };
    }

    handleDrag = (e, position) => {
        if (this.state.mode === null) {
            if (Math.abs(position.deltaX) > 2 * Math.abs(position.deltaY)) 
                this.setState({mode: 'horizontal'});
            else if (Math.abs(position.deltaY) > 2 * Math.abs(position.deltaX)) 
                this.setState({mode: 'vertical'});
            }
        
        if (this.state.mode === 'vertical') {
            this.setState({
                x: 0,
                axis: 'y'
            }, () => document.querySelector('.viewport').scrollTop -= position.y);
        } else if (this.state.mode === 'horizontal') 
            this.setState({x: position.x});
        }
    
    handleStop = (e, position) => {
        this.setState({mode: null});
        if ((position.x > 0 && position.x > window.innerWidth / 2) || (position.x < 0 && position.x < -window.innerWidth / 2)) {
            this.setState({
                x: position.x,
                axis: 'x'
            }, () => setTimeout(() => {
                this.setState({x: 0});
                this
                    .props
                    .closeApp();
            }, 50));

        } else 
            this.setState({x: 0, axis: 'x'});
        }
    
    render() {
        return (
            <Draggable
                axis={this.state.axis}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                position={{
                x: this.state.x,
                y: this.state.y
            }}>
                <div className='recent-app-item'>
                    <NavLink exact to={'/' + this.props.app} activeClassName="active">
                        <h2>
                            {this.props.app.replace('-', ' ')}
                        </h2>
                    </NavLink>
                    <button className='close-app-button' onClick={this.props.closeApp}>X</button>
                </div>
            </Draggable>
        );
    }
}

export default RecentAppItem;