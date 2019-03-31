import React from 'react';
import ReactPlayer from 'react-player'

class MediaPlayerComponent extends React.Component {

    componentDidMount() {
        this
            .player
            .seekTo(this.props.mediaProgress);
    }

    ref = player => {
        this.player = player;
    }

    render() {
        return (
            <div>
                <ReactPlayer
                    url={this.props.url}
                    controls={false}
                    width={'100vw'}
                    height={'50vh'}
                    ref={this.ref}
                    onEnded={() => this.props.handlePlayPause()}
                    playing={this.props.playing}
                    progressInterval={500}
                    onDuration={(duration) => this.props.setDuration(duration)}
                    onProgress={(data) => this.props.handleOnProgress(data)}/>
            </div>
        );
    }
}

export default MediaPlayerComponent;