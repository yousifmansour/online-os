import React from 'react';
import InputRange from 'react-input-range';

import './CustomSliderComponent.css';
import './MediaPlayerControlsComponent.css';

class MediaPlayerControlsComponent extends React.Component {
    state = {
        progress: this.props.progress
    };

    componentWillReceiveProps(nextProps) {
        // if (Math.abs(this.state.progress - this.props.progress) > 0.05)
        this.setState({progress: nextProps.progress});
    }

    handleChange = (value) => {
        this.setState({
            progress: value
        }, () => this.props.seekTo(value, true));
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
                <InputRange
                    formatLabel={() => ''}
                    maxValue={1}
                    minValue={0}
                    step={0.01}
                    onChangeComplete={(progress) => this.props.seekTo(progress, false)}
                    value={this.state.progress}
                    onChange={(progress) => this.handleChange(progress)}/>

                <div>
                    {this.props.playingOnOtherDevice
                        ? 'Playing on other device'
                        : null}
                </div>

                <button className='play-pause-button' onClick={this.props.handlePlayPause}>
                    {icon}
                </button>

                <div>{Math.floor(this.props.playedSeconds)}/{Math.floor(this.props.duration)}</div>
            </div>
        );
    }
}

export default MediaPlayerControlsComponent