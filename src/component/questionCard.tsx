import React from "react";
import { Verb } from "../model/verb";

type QProps = {
  question: Verb;
  callbackV2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  callbackV3: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userAnswerV2: string;
  userAnswerV3: string;
  questionNr: number;
  totalQuestions: number;
};

function QuestionCard(props: QProps): JSX.Element {
  const {
    question,
    callbackV2,
    callbackV3,
    userAnswerV2,
    userAnswerV3,
    questionNr,
    totalQuestions,
  } = props;
  return (
    <div>
      <p className="number">
        Question: {questionNr + 1} / {totalQuestions}
      </p>
      <p className="verb">{question.v1}</p>
      <p>
        <input
          type="text"
          name="V2"
          placeholder="Simple past"
          onChange={callbackV2}
          value={userAnswerV2}
        />
      </p>
      <p>
        <input
          type="text"
          name="V3"
          placeholder="Past participle"
          onChange={callbackV3}
          value={userAnswerV3}
        />
      </p>
    </div>
  );
}

export default QuestionCard;
