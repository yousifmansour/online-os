import React from 'react';
import InputRange from 'react-input-range';

import './CustomSliderComponent.css';
import './MediaPlayerControlsComponent.css';

class MediaPlayerControlsComponent extends React.Component {
    state = {
        progress: this.props.progress
    };

    componentWillReceiveProps(nextProps) {
        this.setState({progress: nextProps.progress});
    }

    handleChange = (value) => {
        this.setState({
            progress: value
        }, () => this.props.seekTo(value, true));
    }

    formatTime = numberOfSeconds => {
        numberOfSeconds = Math.floor(numberOfSeconds);
        let numberOfMinutes = 0;
        if (numberOfSeconds / 60 >= 1) {
            numberOfMinutes = Math.floor(numberOfSeconds / 60);
            numberOfSeconds = numberOfSeconds - (numberOfMinutes * 60);
        }

        if (numberOfMinutes < 10) 
            numberOfMinutes = '0' + numberOfMinutes;
        
        if (numberOfSeconds < 10) 
            numberOfSeconds = '0' + numberOfSeconds;
        
        return numberOfMinutes + ':' + numberOfSeconds;
    }

    render() {
        let icon;
        if (this.props.playing) 
            icon = (
                <i className="fas fa-3x fa-pause"></i>
            );
        else 
            icon = (
                <i className="fas fa-3x fa-play"></i>
            );
        return (
            <div className='media-player-controls-component'>
                <div className='slider-and-time'>
                    <h3>{this.formatTime(this.props.playedSeconds)}</h3>
                    <InputRange
                        formatLabel={() => ''}
                        maxValue={1}
                        minValue={0}
                        step={0.01}
                        onChangeComplete={(progress) => {
                        this
                            .props
                            .seekTo(progress, false);
                    }}
                        value={this.state.progress}
                        onChange={(progress) => this.handleChange(progress)}/>

                    <h3>{this.formatTime(this.props.duration)}</h3>
                </div>

                <div>
                    {this.props.playingOnOtherDevice
                        ? 'Playing on other device'
                        : null}
                </div>

                <button className='play-pause-button' onClick={this.props.handlePlayPause}>
                    {icon}
                </button>
            </div>
        );
    }
}

export default MediaPlayerControlsComponent