import React from 'react';
import 'system/components/RecentApps.css'

const RecentApps = ({recentApps}) => {
    document
        .querySelector('body')
        .scrollTop = 0;
    return (
        <div className='recent-apps'>
            <div className='links'>
                {recentApps}
            </div>
        </div>
    );

};

export default RecentApps;