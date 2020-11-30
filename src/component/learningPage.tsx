import React from 'react';
import SiteHeader from './siteHeader';
import GroupedVerbs from './groupedVerbs';

function LearningPage(): JSX.Element {
    return (
        <div>
            <SiteHeader />
            <GroupedVerbs />
            <div className="footer"></div>
        </div>
    )
}

export default LearningPage;