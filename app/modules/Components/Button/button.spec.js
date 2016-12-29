import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

var myMock = jest.fn();

describe('Button', () => {
    it('should change text after click', () => {
        // Render a checkbox with label in the document
        const button = shallow(
            <Button onClick={myMock} />
        );
        expect(button.text()).toEqual('not clicked');

        button.simulate('click');
        expect(button.text()).toEqual('clicked');

        expect(myMock.mock.calls.length).toBe(1);
    });
});
