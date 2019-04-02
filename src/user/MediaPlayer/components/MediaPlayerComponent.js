import React from 'react';
import ReactPlayer from 'react-player'

import './MediaPlayerComponent.css';

class MediaPlayerComponent extends React.Component {
    state = {
        progress: this.props.progress
    }

    componentDidMount() {
        this
            .player
            .seekTo(this.props.progress);
    }

    ref = player => {
        this.player = player;
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.playing && nextProps.playing) {
            // we just started playing
            if (this.player) 
                this.player.seekTo(this.props.progress);
            }
        if (this.props.playing && nextProps.playing) {
            // if someone was seeking while we are playing
            if (Math.abs(nextProps.progress - this.state.progress) > 0.05) 
                if (this.player) 
                    this.player.seekTo(this.props.progress);
                }
            
    }

    handleOnProgress = (data) => {
        this.setState({
            progress: data.played
        }, () => this.props.handleOnProgress(data));
    }

    render() {

        return (
            <div className='media-player-component'>
                <ReactPlayer
                    url={this.props.url}
                    controls={false}
                    width={'100%'}
                    height={'100%'}
                    ref={this.ref}
                    onEnded={() => this.props.handlePlayPause()}
                    playing={this.props.playing}
                    progressInterval={50}
                    onDuration={(duration) => this.props.setDuration(duration)}
                    onProgress={(data) => this.handleOnProgress(data)}/>
            </div>
        );
    }
}

export default MediaPlayerComponent;