import React from 'react';

class MediaPlayerControlsComponent extends React.Component {
    state = {
        progress: this.props.progress
    };

    componentWillReceiveProps(nextProps) {
        // if (Math.abs(this.state.progress - this.props.progress) > 0.05)
        this.setState({progress: nextProps.progress});
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            progress: value
        }, () => this.props.seekTo(value, true));
    }

    render() {
        return (
            <div>
                <input
                    style={{
                    width: '80vw'
                }}
                    type='range'
                    onTouchEnd={(e) => this.props.seekTo(e.target.value, false)}
                    onMouseUp={(e) => this.props.seekTo(e.target.value, false)}
                    max='1'
                    min='0'
                    step='0.001'
                    value={this.state.progress}
                    onChange={this.handleChange}/>

                <div>
                    {this.props.playingOnOtherDevice
                        ? 'playing on other device'
                        : null}
                </div>

                <div>
                    <h2>controls</h2>
                    <button onClick={this.props.handlePlayPause}>play/pause</button>
                </div>
                <div>
                    <div>progress: {this.props.progress}</div>
                    <div>played seconds: {Math.floor(this.props.playedSeconds)}/{Math.floor(this.props.duration)}</div>
                </div>
            </div>
        );
    }
}

export default MediaPlayerControlsComponent