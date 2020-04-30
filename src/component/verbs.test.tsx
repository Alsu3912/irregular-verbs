import React, {useEffect} from 'react';
import VerbsTable from './verb';
import renderer, {act} from 'react-test-renderer';

test('should have the default table', () => {
    const component = renderer.create(<VerbsTable />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('should have a table of verbs', () => {
    let wrapper: any;
    act(() => {
        wrapper = renderer.create(<VerbsTable />);
    });
    act(() => {
        wrapper.update();
    })
    const x = wrapper.toJSON();
    expect(x).toMatchSnapshot();
});