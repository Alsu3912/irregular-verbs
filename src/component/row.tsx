import React from 'react';
import { Verb } from '../model/verb';

interface RowProps {
    verbList: Verb[]
};

function Row(props: RowProps) {
    return (
        <tbody>
            {props.verbList.map(verbsElement => (
                <tr key={verbsElement.v1}>
                    <th>
                        {verbsElement.v1}
                    </th>
                    {splitUpVerb(verbsElement.v2)}
                    {splitUpVerb(verbsElement.v3)}
                </tr>
            ))}
        </tbody>
    )
};

const splitUpVerb = (arrayOfVerbs: string[]): JSX.Element => {
    let verbDescription = arrayOfVerbs.length > 1 ? arrayOfVerbs.join(" / ") : arrayOfVerbs[0];
    if (!verbDescription) {
        return (
            <th></th>
        )
    }
    return (
        <th>
            {verbDescription}
        </th>
    )
};
export default Row;
