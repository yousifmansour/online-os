import React from 'react';
import {NavLink} from 'react-router-dom';
import TimeAndDateContainer from 'system/TimeAndDate/containers/TimeAndDateContainer';
import {loadBackgrounds} from 'actions/settings';
import {connect} from 'react-redux';

import 'system/Home/components/Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.backgrounds && this.props.backgrounds.length === 0) 
            this.props.loadBackgrounds();
        }
    
    getBackgroundImage = () => {
        let currentBackground = '';

        if (this.props.backgrounds) 
            currentBackground = this.props.backgrounds[this.props.backgroundIndex];
        
        return currentBackground;
    }

    render() {
        let currentBackground = this.getBackgroundImage();
        return (
            <div
                className='home'
                style={{
                background: `center / cover no-repeat url(${currentBackground})`
            }}>
                <div className='list-container'>
                    {/* <div>{this.state.currentBackgroundIndex}</div>
                    <button onClick={this.handleBackgroundToggle}>toggle</button> */}
                    <TimeAndDateContainer/>
                    <div className='links'>
                        <NavLink exact to="/calculator" activeClassName="active">
                            <div className='icon'>
                                <img
                                    width='50px'
                                    src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calculator-icon.png'/>
                                Calculator
                            </div>
                        </NavLink>

                        <NavLink exact to="/notes" activeClassName="active">
                            <div className='icon'>
                                <img
                                    width='50px'
                                    src='http://icons.iconarchive.com/icons/alienvalley/osx-dock-replacement/512/notes-icon.png'/>
                                Notes
                            </div>
                        </NavLink>

                        <NavLink exact to="/files" activeClassName="active">
                            <div className='icon'>
                                <img
                                    width='50px'
                                    src='http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png'/>
                                Files
                            </div>
                        </NavLink>

                        <NavLink exact to="/settings" activeClassName="active">
                            <div className='icon'>
                                <img
                                    width='50px'
                                    src='http://2.bp.blogspot.com/-sNfYi65NmjQ/VBwq9E-eejI/AAAAAAAAAtQ/zvYVD3seHoE/s1600/settings.png'/>
                                Settings
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => state.settings, {loadBackgrounds})(Home);