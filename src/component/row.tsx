import React from "react";
import { Verb } from "../model/verb";

interface RowProps {
  verbList: Verb[];
}

const splitUpVerb = (arrayOfVerbs: string[]): JSX.Element => {
  const verbDescription =
    arrayOfVerbs.length > 1 ? arrayOfVerbs.join(" / ") : arrayOfVerbs[0];
  return <th>{verbDescription}</th>;
};

function Row(props: RowProps): JSX.Element {
  const { verbList } = props;
  return (
    <tbody>
      {verbList.map((verbsElement) => (
        <tr key={verbsElement.v1}>
          <th>{verbsElement.v1}</th>
          {splitUpVerb(verbsElement.v2)}
          {splitUpVerb(verbsElement.v3)}
        </tr>
      ))}
    </tbody>
  );
}

export default Row;
