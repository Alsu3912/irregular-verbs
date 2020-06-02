import React, { useState, useEffect } from 'react';
import { readGroups, flatten, sort, Verb } from '../model/verb'

function VerbsTable(): JSX.Element {
    const [arrayOfVerbs, setArrayOfVerbs] = useState<Array<Verb>>(defaultArrayOfVerbs);

    useEffect(() => {
        async function dataLoading(): Promise<void> {
            try {
                const verbsJson = await readGroups();
                const flattenVerbs = sort(flatten(verbsJson));
                setArrayOfVerbs(flattenVerbs);
            } catch (err) {
                console.error(err);
                setArrayOfVerbs(defaultErrorTable);
            }
        }
        dataLoading();
    });

    return (
        <div className='section'>
            <table>
                <thead>
                    <tr>
                        <th className="sticky-header">Base form</th>
                        <th className="sticky-header">Simple past</th>
                        <th className="sticky-header">Past participle</th>
                    </tr>
                </thead>
                <CreateRow verbList={arrayOfVerbs} />
            </table>
        </div>
    );
}

interface CreateRowProps {
    verbList: Verb[]
}

function CreateRow(props: CreateRowProps) {
    return (
        <tbody>
            {props.verbList.map(verbsElement => (
                <tr key={verbsElement.v1}>
                    <th>
                        {verbsElement.v1}
                    </th>
                    <th>
                        {verbsElement.v2}
                    </th>
                    <th>
                        {verbsElement.v3}
                    </th>
                </tr>
            ))}
        </tbody>
    )
}

const defaultArrayOfVerbs = [
    { v1: 'loading', v2: ['loading'], v3: ['loading'] }
]

const defaultErrorTable = [
    { v1: 'failed to load', v2: ['failed to load'], v3: ['failed to load'] }
]

export default VerbsTable;