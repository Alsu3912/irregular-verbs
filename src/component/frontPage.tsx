import React from 'react';
import SiteHeader from './siteHeader';
import VerbsTable from './verb';


function FrontPage(): JSX.Element {
    return (
        <div>
            <section className="section1">
                <SiteHeader />
                
            </section>
            <section className="section2">
                <div className="content1">
                    <h1>Do you want to learn irregular verbs?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                    officia, deserunt illo id suscipit rerum!
                    Nesciunt repellendus corrupti quaerat, voluptate esse, nisi consequuntur vero vel tempora, similique
                    dicta
                    temporibus quo.
            </p>
                    <button>start learning</button>
                </div>
                <div>
                    <VerbsTable />
                </div>
                <div className="footer"></div>
            </section>
        </div>
    )
}

export default FrontPage;