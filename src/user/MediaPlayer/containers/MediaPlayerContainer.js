import React from 'react';
import * as mediaActions from 'actions/MediaPlayer';
import {addApp} from 'actions/recentApps';
import {connect} from 'react-redux';
import MediaPlayerComponent from 'user/MediaPlayer/components/MediaPlayerComponent';
import MediaPlayerControlsComponent from 'user/MediaPlayer/components/MediaPlayerControlsComponent';

import './MediaPlayerContainer.css';

class MediaPlayerContainer extends React.Component {
    state = {
        startedTime: new Date().toISOString(),
        playing: false,
        playedSeconds: 0,
        duration: 0,
        seeking: false
    }

    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);
    }

    handlePlayPause = () => {
        if (this.state.playing) {
            this.setState({
                playing: false
            }, () => {
                this
                    .props
                    .setMediaPlaying(false);
            });
        } else {
            let startedTime = new Date().toISOString();
            this.setState({
                playing: true,
                startedTime
            }, () => {
                this
                    .props
                    .setMediaPlaying(true);
                this
                    .props
                    .setMediaStartedTime(startedTime);
            });
            // we need to seek to current location now
        }
    }

    handleOnProgress = (data) => {
        if (!this.state.playing || this.state.seeking) 
            return;
        this
            .props
            .setMediaProgress(data.played);
        this.setState({playedSeconds: data.playedSeconds});
    }

    shouldStopPlaying = (serverTime, localTime) => this.state.playing && new Date(serverTime) > new Date(localTime);

    componentWillReceiveProps(nextProps) {
        if (this.shouldStopPlaying(nextProps.startedTime, this.state.startedTime)) 
            this.setState({playing: false});
        }
    
    // someone started playing after us, we stop

    seekTo = (position, stillSeeking) => {
        if (stillSeeking !== this.state.seeking) 
            this.setState({seeking: stillSeeking});
        
        this
            .props
            .setMediaProgress(position);
    }

    render() {
        let playing = this.props.mediaPlaying && this.state.playing;
        let playingOnOtherDevice = this.props.mediaPlaying && !this.state.playing;

        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';

        url = url + '/home' + this.props.mediaPath;

        return (
            <div className='media-player-container'>
                <MediaPlayerComponent
                    progress={this.props.mediaProgress}
                    ref={this.ref}
                    url={url}
                    playing={playing}
                    playingOnOtherDevice={this.playingOnOtherDevice}
                    setDuration={(duration) => this.setState({duration})}
                    handlePlayPause={this.handlePlayPause}
                    handleOnProgress={this.handleOnProgress}/>
                <MediaPlayerControlsComponent
                    playing={this.state.playing}
                    seekTo={(position, stillSeeking) => this.seekTo(position, stillSeeking)}
                    duration={this.state.duration}
                    playedSeconds={this.state.playedSeconds}
                    progress={this.props.mediaProgress}
                    handlePlayPause={this.handlePlayPause}
                    playingOnOtherDevice={playingOnOtherDevice}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.mediaPlayer;
}

export default connect(mapStateToProps, {
    ...mediaActions,
    addApp
})(MediaPlayerContainer);