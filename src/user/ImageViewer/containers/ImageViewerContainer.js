import * as React from 'react';
import Viewer from 'react-viewer';
import './temp.css';

class ImageViewerContainer extends React.Component {

    render() {
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
                    images={[{
                        src: 'http://getwallpapers.com/wallpaper/full/f/8/1/74346.jpg',
                        alt: ''
                    }
                ]}/>
            </div>
        );
    }
}

export default ImageViewerContainer;