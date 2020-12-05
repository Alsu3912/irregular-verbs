import React from "react";
import renderer, { act, ReactTestRenderer } from "react-test-renderer";
import VerbsTable from "./verb";

test("should have the default table", () => {
  const component = renderer.create(<VerbsTable />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should have a table of verbs", () => {
  let wrapper: ReactTestRenderer;
  act(() => {
    wrapper = renderer.create(<VerbsTable />);
  });
  act(() => {
    wrapper.update(<VerbsTable />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
