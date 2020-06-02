import React from 'react';
import { Verb } from '../model/verb';

interface CreateRowProps {
    verbList: Verb[]
};

function CreateRow(props: CreateRowProps) {
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
    return (
        <th>
            {verbDescription}
        </th>
    )
};
export default CreateRow;
