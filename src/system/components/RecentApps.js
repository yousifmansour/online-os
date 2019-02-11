import React from 'react';
import './RecentApps.css'

const RecentApps = ({recentApps}) => (
    <div className='recent-apps'>
        <div className='links'>
            {recentApps}
        </div>
    </div>
);

export default RecentApps;