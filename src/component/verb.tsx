import React, { useState, useEffect } from "react";
import { readGroups, flatten, sort, Verb } from "../model/verb";
import Row from "./row";

const defaultArrayOfVerbs = [
  { v1: "loading", v2: ["loading"], v3: ["loading"] },
];

const defaultErrorTable = [
  { v1: "failed to load", v2: ["failed to load"], v3: ["failed to load"] },
];

function VerbsTable(): JSX.Element {
  const [arrayOfVerbs, setArrayOfVerbs] = useState<Array<Verb>>(
    defaultArrayOfVerbs
  );

  useEffect(() => {
    let mounted = true;
    async function dataLoading(): Promise<void> {
      try {
        const verbsJson = await readGroups();
        const flattenVerbs = sort(flatten(verbsJson));
        if (mounted) {
          setArrayOfVerbs(flattenVerbs);
        }
      } catch (err) {
        console.error(err);
        if (mounted) {
          setArrayOfVerbs(defaultErrorTable);
        }
      }
    }
    dataLoading();
    return (): void => {
      mounted = false;
    };
  });

  return (
    <div className="section">
      <table>
        <thead>
          <tr>
            <th className="sticky-header">Base form</th>
            <th className="sticky-header">Simple past</th>
            <th className="sticky-header">Past participle</th>
          </tr>
        </thead>
        <Row verbList={arrayOfVerbs} />
      </table>
    </div>
  );
}

export default VerbsTable;
