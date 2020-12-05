import React from "react";
import { Verb, verbComparison } from "../model/verb";

export class AnswerPair {
  v2: string;

  v3: string;

  constructor(SimplePast: string, PastParticiple: string) {
    this.v2 = SimplePast;
    this.v3 = PastParticiple;
  }
}

type ResultTableProps = {
  verbList: Verb[];
  answerList: Array<AnswerPair>;
};

type RowResultProps = ResultTableProps & {
  loop: number;
};

function Correct(properVerb: string[], answerVerb: string): JSX.Element {
  if (
    verbComparison(properVerb[0], answerVerb) ||
    verbComparison(properVerb[1], answerVerb)
  ) {
    return <th className="correct">{answerVerb}</th>;
  }
  return (
    <th className="wrong">
      {properVerb.join(" or ")}
      <br />
      {answerVerb.length === 0 ? (
        <p>
          <i>no answer was provided</i>
        </p>
      ) : (
        <p>
          <s>{answerVerb}</s>
        </p>
      )}
    </th>
  );
}

const RowResult = ({
  verbList,
  answerList,
  loop,
}: RowResultProps): JSX.Element => {
  return (
    <tr key={verbList[loop].v1}>
      <th>{verbList[loop].v1}</th>
      {Correct(verbList[loop].v2, answerList[loop].v2)}
      {Correct(verbList[loop].v3, answerList[loop].v3)}
    </tr>
  );
};

function ResultTable(props: ResultTableProps): JSX.Element {
  const rows: JSX.Element[] = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <RowResult
        key={props.verbList[i].v1}
        verbList={props.verbList}
        answerList={props.answerList}
        loop={i}
      />
    );
  }
  return (
    <div>
      <p>Your result:</p>
      <table>
        <thead key="thead">
          <tr key="title">
            <th className="sticky-header">Base form</th>
            <th className="sticky-header">Simple past</th>
            <th className="sticky-header">Past participle</th>
          </tr>
        </thead>
        <tbody key="tbody">{rows}</tbody>
      </table>
    </div>
  );
}

export default ResultTable;
