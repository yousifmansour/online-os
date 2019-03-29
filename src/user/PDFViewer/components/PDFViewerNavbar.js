import React from 'react';

import './PDFViewerNavbar.css';

const PDFViewerNavbar = ({scaleUpPDF, scaleDownPDF}) => (
    <div className='pdf-viewer-navbar-component'>
        <button onClick={() => scaleUpPDF()}>
            <i className="fas fa-search-plus"></i>
        </button>
        <button onClick={() => scaleDownPDF()}>
            <i className="fas fa-search-minus"></i>
        </button>

    </div>
);

export default PDFViewerNavbar;