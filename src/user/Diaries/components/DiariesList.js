import React from 'react';

import 'user/Diaries/components/DiariesList.css';

const DiariesList = ({diaries}) => (
    <div className='diaries-list'>
        <h1>Documentation For Online OS</h1>
        <h2>Avalible Weeks</h2>
        {diaries}
    </div>
);

export default DiariesList;