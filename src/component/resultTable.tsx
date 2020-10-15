import React from 'react';
import { Verb, verbComparison } from '../model/verb';
import {AnswerPair} from './trainingPage';

type ResultTableProps = {
    verbList: Verb[];
    answerList: Array<AnswerPair>;
};

type RowResultProps = ResultTableProps & {
    loop: number;
}

function Correct(properVerb: string[], answerVerb: string): JSX.Element {
    if (verbComparison(properVerb[0], answerVerb) || verbComparison(properVerb[1], answerVerb)) {
        return (
            <th>
                {answerVerb}
            </th>
        );
    } else {
        return (
            <th>
                {properVerb.join(" or ")}<br />
                {answerVerb.length === 0 ? (
                    <p><i>no answer was provided</i></p>
                ) : (
                    <p><s>{answerVerb}</s></p>
                )}
            </th>
        )
    }
}

function RowResult(props: RowResultProps): JSX.Element {
    return (
        <tr key={props.verbList[props.loop].v1}>
            <th>{props.verbList[props.loop].v1}</th>
            {Correct(props.verbList[props.loop].v2, props.answerList[props.loop].v2)}
            {Correct(props.verbList[props.loop].v3, props.answerList[props.loop].v3)}
        </tr>
    )
}

function ResultTable(props: ResultTableProps): JSX.Element {
    var rows: JSX.Element[] = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<RowResult key={props.verbList[i].v1} verbList={props.verbList} answerList={props.answerList} loop={i} />);
    }
    return (
        <div>
            <p>Your result:</p>
            <table>
                <thead key="thead">
                    <tr key="title">
                        <th>Base form</th>
                        <th>Simple past</th>
                        <th>Past participle</th>
                    </tr>
                </thead>
                <tbody key="tbody">
                    {rows}
                </tbody>
            </table>
        </div>
    )
};

export default ResultTable;