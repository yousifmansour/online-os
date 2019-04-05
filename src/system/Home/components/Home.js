import React from 'react';
import {NavLink} from 'react-router-dom';
import TimeAndDateContainer from 'system/TimeAndDate/containers/TimeAndDateContainer';
import 'system/Home/components/Home.css';

const Home = (props) => (
    <div className='list-container'>
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
                <div className='
                        icon'>
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
        </div>
    </div>
);

export default Home;