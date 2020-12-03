import React from 'react';
import SiteHeader from './siteHeader';
import VerbsTable from './verb';
import { useHistory } from 'react-router-dom';


function FrontPage(): JSX.Element {
    return (
        <div>
            <section className="section1">
                <SiteHeader />

            </section>
            <section className="section2">
                <div className="dictionary">
                    <div className="word-annex">
                        <p className="word">irregular</p>
                        <span className="italic">(adjective)</span>
                        <p className="transcription">[ɪˈreɡjələ(r)]</p>
                    </div>
                    <div className="definition">
                        <p>​1. not arranged in an even way; not having an even, smooth pattern or shape</p>
                        <p>2. not happening at times that are at an equal distance from each other; not happening regularly</p>
                    </div>
                </div>
                <div className="dictionary">
                    <div className="word-annex">
                        <p className="word">verb</p>
                        <span className="italic">(noun)</span>
                        <p className="transcription">[vɜːb]</p>
                    </div>
                    <div className="definition">
                        <p>​1. a word or group of words that expresses an action (such as eat), an event (such as happen) or a state (such as exist)</p>
                    </div>
                </div>
                <div className="content1">
                    <p>This site is for those who do not feel confident in using irregular verbs.
                    In the "learning" section, a grouping of verbs is presented, which allows you to quickly memorize the forms of irregular verbs.
                    And by going to the "training" section, you can check how well you remember the verbs.
                    </p>
                    <LearningButton />
                </div>
                <div>
                    <VerbsTable />
                </div>
                <div className="footer"></div>
            </section>
        </div>
    )
}

function LearningButton(): JSX.Element {
    let history = useHistory();

    function handleClick(): void {
        history.push("/learning");
    }

    return (
        <button type="button" onClick={handleClick}>
            start learning
        </button>
    );
}

export default FrontPage;