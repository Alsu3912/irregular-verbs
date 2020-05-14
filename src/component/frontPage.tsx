import React from 'react';
import VerbsTable from './verb';

function FrontPage(): JSX.Element {
    return (
        <div>
            {/* <img src='./back.jpg' alt=""/> */}
            <div className='section1'>
                <div className='inner'>
                    <section id="home-section" className="active">
                        <div id="columns03" className="container default">
                            <div className='inner'>
                                <div id="image03" className="image"><img src="./image03.png" alt=""/></div>
                                <h1 id="text03">irregular verbs</h1>
                                <hr id="divider04"></hr>
                                <p id="text09">Learn and train irregular verbs</p>
                            </div>
                        </div>
                    </section>
                    <VerbsTable />
                </div>
            </div>
        </div>
    )
}

export default FrontPage;