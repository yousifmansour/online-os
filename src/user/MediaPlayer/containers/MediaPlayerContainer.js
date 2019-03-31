import React from 'react';
import * as mediaActions from 'actions/MediaPlayer';
import {connect} from 'react-redux';
import MediaPlayerComponent from 'user/MediaPlayer/components/MediaPlayerComponent';
import MediaPlayerControlsComponent from 'user/MediaPlayer/components/MediaPlayerControlsComponent';

class MediaPlayerContainer extends React.Component {
    state = {
        startedTime: new Date().toISOString(),
        playing: false,
        playedSeconds: 0,
        duration: 0
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
        }
    }

    handleOnProgress = (data) => {
        if (!this.state.playing) 
            return;
        this
            .props
            .setMediaProgress(data.played);
        this.setState({progress: data.played, playedSeconds: data.playedSeconds});
    }

    // someone started playing after us, we stop
    shouldStopPlaying = (serverTime, localTime) => this.state.playing && new Date(serverTime) > new Date(localTime);

    render() {
        if (this.shouldStopPlaying(this.props.startedTime, this.state.startedTime)) 
            this.setState({playing: false});
        
        let playing = this.props.mediaPlaying && this.state.playing;
        let playingOnOtherDevice = this.props.mediaPlaying && !this.state.playing;

        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';

        url = url + '/home' + this.props.mediaPath;

        return (
            <div>
                <MediaPlayerComponent
                    mediaProgress={this.props.mediaProgress}
                    ref={this.ref}
                    url={this.props.mediaPath}
                    playing={playing}
                    playingOnOtherDevice={this.playingOnOtherDevice}
                    setDuration={(duration) => this.setState({duration})}
                    handlePlayPause={this.handlePlayPause}
                    handleOnProgress={this.handleOnProgress}/>
                <MediaPlayerControlsComponent
                    seekTo={(position) => this.props.setMediaProgress(position)}
                    duration={this.state.duration}
                    playedSeconds={this.state.playedSeconds}
                    progress={this.props.mediaProgress}
                    handlePlayPause={this.handlePlayPause}
                    playingOnOtherDevice={playingOnOtherDevice}/> {/* <div>
                    <h2>state</h2>
                    <div>media playing: {this.props.mediaPlaying + ''}</div>
                    <div>local state playing: {this.state.playing + ''}</div>
                    <div>startedTime: {this.props.startedTime}</div>
                    <div>local startedTime: {this.state.startedTime}</div>
                    <div>progress: {this.props.mediaProgress}</div>
                    <div>path: {this.props.mediaPath}</div>
                    <div>played seconds: {Math.floor(this.state.playedSeconds)}/{Math.floor(this.state.duration)}</div>
                </div> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.mediaPlayer;
}

export default connect(mapStateToProps, {
    ...mediaActions
})(MediaPlayerContainer);