import React from 'react';
import { Link } from 'react-router-dom'

function SiteHeader(): JSX.Element {
    return (
        <div id="site_header">
            <h3>irregular verbs</h3>
            <hr>
            </hr>
            <nav>
                <Link to="/">main</Link>
                <Link to="/learning">learning</Link>
                <Link to="/training">training</Link>
            </nav>
        </div>
    )
}

export default SiteHeader;