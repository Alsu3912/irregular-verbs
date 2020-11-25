import React from 'react';
import { Link } from 'react-router-dom'

function SiteHeader(): JSX.Element {
    return (
        <div id="site_header" className="header">
            <Link to="/" className="logo">irregular verbs</Link>
            <nav>
                <Link to="/" className="active">main</Link>
                <Link to="/learning">learning</Link>
                <Link to="/training">training</Link>
            </nav>
        </div>
    )
}

export default SiteHeader;