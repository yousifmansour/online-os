import * as React from 'react';
import Viewer from 'react-viewer';
import './ImageViewerContainer.css';
import {connect} from 'react-redux';
import {addApp} from 'actions/recentApps';

class ImageViewerContainer extends React.Component {
    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);
    }
    render() {
        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';

        let images = [
            {
                src: url + "/home/" + this.props.imagePath,
                alt: ''
            }
        ];

        return (
            <div>
                <Viewer
                    visible={true}
                    drag={false}
                    changeable={false}
                    noClose
                    noToolbar
                    noFooter
                    noImgDetails
                    noNavbar
                    noImgDetails
                    onClose={() => {
                    this.setState({visible: false});
                }}
                    images={images}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.imageViewer;
}

export default connect(mapStateToProps, {addApp})(ImageViewerContainer);