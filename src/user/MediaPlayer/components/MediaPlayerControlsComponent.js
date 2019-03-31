import React from 'react';

class MediaPlayerControlsComponent extends React.Component {
    state = {
        position: this.props.progress
    };

    render() {
        if (Math.abs(this.state.position - this.props.progress) > 0.05) 
            this.setState({position: this.props.progress});

        return (
            <div>
                <input
                    style={{
                    width: '80vw'
                }}
                    type='range'
                    onTouchEnd={(e) => this.props.seekTo(e.target.value)}
                    onMouseUp={(e) => this.props.seekTo(e.target.value)}
                    max='1'
                    min='0'
                    step='0.00001'
                    value={this.props.progress}
                    onChange={(e) => this.setState({position: e.target.value})}/>

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