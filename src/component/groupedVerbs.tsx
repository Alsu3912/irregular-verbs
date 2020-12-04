import React, { useState, useEffect } from "react";
import { readGroups, Groups } from "../model/verb";
import Row from "./row";

const defaultGroupOfVerbs = {
  groups: [
    {
      name: "loading",
      verbs: [
        {
          v1: "loading",
          v2: ["loading"],
          v3: ["loading"],
        },
      ],
    },
  ],
};

const defaultErrorGroup = {
  groups: [
    {
      name: "failed to load",
      verbs: [
        {
          v1: "failed to load",
          v2: ["failed to load"],
          v3: ["failed to load"],
        },
      ],
    },
  ],
};

function GroupedTable(props: GroupedTableProps) {
  const { verbsJson } = props;
  return (
    <>
      {verbsJson.groups.map((element) => (
        <div className="section">
          <table>
            <caption>{element.name}</caption>
            <thead>
              <tr>
                <th className="sticky-header">Base form</th>
                <th className="sticky-header">Simple past</th>
                <th className="sticky-header">Past participle</th>
              </tr>
            </thead>
            <Row verbList={element.verbs} />
          </table>
        </div>
      ))}
    </>
  );
}

function GroupedVerbs(): JSX.Element {
  const [groupsOfVerbs, setGroupsOfVerbs] = useState<Groups>(
    defaultGroupOfVerbs
  );
  useEffect(() => {
    async function dataLoading(): Promise<void> {
      try {
        const verbsJson = await readGroups();
        setGroupsOfVerbs(verbsJson);
      } catch (err) {
        console.error(err);
        setGroupsOfVerbs(defaultErrorGroup);
      }
    }
    dataLoading();
  });
  return <GroupedTable verbsJson={groupsOfVerbs} />;
}

interface GroupedTableProps {
  verbsJson: Groups;
}

export default GroupedVerbs;
