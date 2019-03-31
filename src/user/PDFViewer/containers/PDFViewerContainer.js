import React from 'react';
import {connect} from 'react-redux';
import * as pdfViewerActions from 'actions/PDFViewer';
import {addApp} from 'actions/recentApps';

import {Document, Page} from 'react-pdf';
import PDFViewerNavbar from 'user/PDFViewer/components/PDFViewerNavbar';

import './PDFViewerContainer.css';

class PDFViewerContainer extends React.Component {
    state = {
        numPages: 0,
        pageNumber: 1,
        width: 800
    }

    componentDidMount() {
        this.setState({
            width: document
                .querySelector('.viewport')
                .clientWidth
        });

        this
            .props
            .addApp(this.props.appName);
    }

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
    }

    render() {
        console.log(this.props.scale);
        let allPages = [];
        for (let i = 0; i < this.state.numPages; i++) {
            allPages.push((<Page
                width={0.9 * this.state.width}
                loading=''
                key={i}
                pageNumber={i + 1}
                scale={this.props.scale}/>));
        }

        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';

        return (
            <div className='pdf-viewer-container'>
                <div className='document'>
                    <Document
                        file={url + "/home" + this.props.pdfPath}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                        loading=''>
                        {allPages}
                    </Document>
                </div>
                <PDFViewerNavbar
                    scaleUpPDF={this.props.scaleUpPDF}
                    scaleDownPDF={this.props.scaleDownPDF}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.pdfViewer;
}

export default connect(mapStateToProps, {
    ...pdfViewerActions,
    addApp
})(PDFViewerContainer);