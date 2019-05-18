import React from 'react';
import { shallow } from 'enzyme';
import ListItem from 'components/list-item';

describe('Component - List Item', () => {

    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<ListItem />);
        instance = wrapper.instance();
    });

    describe('Render', () => {

        test('Has is-done class when status is `done`', () => {

            expect(wrapper.hasClass('is-done')).toBe(false);
            wrapper.setProps({status: 'done'});
            expect(wrapper.hasClass('is-done')).toBe(true);

        });

        test('Displays correct message when itemNumber given', () => {

            wrapper.setProps({
                itemNumber: 1,
                message: 'My message'
            });

            const text = wrapper.find('h4').text();
            expect(text).toBe('1. My message');

        });

        test('Displays correct message when itemNumber not given', () => {

            wrapper.setProps({
                message: 'My message'
            });

            const text = wrapper.find('h4').text();
            expect(text).toBe('My message');

        });

    });

    describe('onRemove', () => {

        test('Calls onRemove prop', () => {

            const onRemove = jest.fn();
            wrapper.setProps({ onRemove });
            instance.onRemove();

            expect(onRemove).toHaveBeenCalled();

        });

        test('Calls e.stopPropagation', () => {

            const event = {
                stopPropagation: jest.fn()
            };
            instance.onRemove(event);

            expect(event.stopPropagation).toHaveBeenCalled();

        });

    });


});
