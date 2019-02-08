import React from 'react';

import './Diaries.css';

const Diaries = ({weeks}) => (
    <div className='diaries-container'>
        <h1>Documentation For Online OS</h1>
        <h2>Avalible Weeks</h2>
        {weeks}
    </div>
);

export default Diaries;