import React from 'react';
import { Verb } from '../model/verb';

type QProps = {
    question: Verb;
    callbackV2: any;
    callbackV3: any;
    userAnswerV2: string;
    userAnswerV3: string;
    questionNr: number;
    totalQuestions: number;
}

function QuestionCard(props: QProps): JSX.Element {
    return (
        <div>
            <p className='number'>
                Question: {props.questionNr + 1} / {props.totalQuestions}
            </p>
            <p>{props.question.v1}</p>
            <p><input type="text" name="V2" placeholder="Simple past" onChange={props.callbackV2} value={props.userAnswerV2} /></p>
            <p><input type="text" name="V3" placeholder="Past participle" onChange={props.callbackV3} value={props.userAnswerV3} /></p>
        </div>
    )
}

export default QuestionCard;