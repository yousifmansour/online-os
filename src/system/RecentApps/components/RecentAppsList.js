import React from 'react';
import RecentAppItem from 'system/RecentApps/components/RecentAppItem';

import 'system/RecentApps/components/RecentAppsList.css';

class RecentAppsList extends React.Component {
    render() {
        const recentApps = this
            .props
            .recentApps
            .map((app, i) => (<RecentAppItem key={i} app={app} closeApp={() => this.props.closeApp(app)}/>));

        return (
            <div className='recent-apps'>
                <div className='links'>
                    {recentApps}
                </div>
            </div>
        );
    }
}

export default RecentAppsList;