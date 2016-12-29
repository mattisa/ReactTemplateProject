// Link.react-test.js
import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

let component;
let tree;
test('Button changes the text when clicked', () => {
    component = renderer.create(
        <Button onClick={() => {}} />
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
