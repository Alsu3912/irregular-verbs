import React, { useState, useEffect } from 'react';
import { readGroups, flatten, Verb } from '../model/verb'

function VerbsTable(): JSX.Element {
    const [arrayOfVerbs, setArrayOfVerbs] = useState<Array<Verb>>(defaultArrayOfVerbs);

    useEffect(() => {
        async function dataLoading(): Promise<void> {
            try {
                const verbsJson = await readGroups();
                const flattenVerbs = flatten(verbsJson);
                setArrayOfVerbs(flattenVerbs);
            } catch (err) {
                console.error(err);
                setArrayOfVerbs(defaultErrorTable);
            }
        }
        dataLoading();
    });

    return (
        <table style={{ "borderWidth": "1px", 'borderStyle': 'solid' }} >
            <thead>
                <tr>
                    <th>Base form</th>
                    <th>Simple past</th>
                    <th>Past participle</th>
                </tr> 
            </thead>
            <CreateRow verbList={arrayOfVerbs} />
        </table>
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