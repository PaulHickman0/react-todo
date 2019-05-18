import React from 'react';
import { shallow } from 'enzyme';
import { Home } from 'pages/home';

describe('Pages - Home', () => {

    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<Home />);
        instance = wrapper.instance();
    });

    describe('Render', () => {

        test('Renders correct ListItems with status `todo`', () => {

            const listItems = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'todo',
                message: 'message 2'
            }, {
                id: 3,
                status: 'done',
                message: 'message 3'
            }, {
                id: 4,
                status: 'todo',
                message: 'message 4'
            }];

            wrapper.setState({ listItems });
            const items = wrapper.find('.c-list__todo').children();

            expect(items.length).toBe(3);

            const item_1 = items.find('ListItem').at(0);
            expect(item_1.prop('itemNumber')).toBe(1);
            expect(item_1.prop('status')).toBe('todo');
            expect(item_1.prop('message')).toBe('message 1');

            const item_2 = items.find('ListItem').at(1);
            expect(item_2.prop('itemNumber')).toBe(2);
            expect(item_2.prop('status')).toBe('todo');
            expect(item_2.prop('message')).toBe('message 2');

            const item_3 = items.find('ListItem').at(2);
            expect(item_3.prop('itemNumber')).toBe(3);
            expect(item_3.prop('status')).toBe('todo');
            expect(item_3.prop('message')).toBe('message 4');
        });

        test('changeItemStatus called with correct params from onClick on ListItem', () => {

            const listItems = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'todo',
                message: 'message 2'
            }];

            instance.changeItemStatus = jest.fn();

            wrapper.setState({ listItems });
            const items = wrapper.find('.c-list__todo').children();
            const item = items.find('ListItem').at(1);
            const onClick = item.prop('onClick');
            onClick();

            expect(instance.changeItemStatus).toHaveBeenCalledWith(2, 'done');

        });

        test('removeItemByID called with correct params from onRemove on ListItem', () => {

            const listItems = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'todo',
                message: 'message 2'
            }];

            instance.removeItemByID = jest.fn();

            wrapper.setState({ listItems });
            const items = wrapper.find('.c-list__todo').children();
            const item = items.find('ListItem').at(1);
            const onRemove = item.prop('onRemove');
            onRemove();

            expect(instance.removeItemByID).toHaveBeenCalledWith(2);

        });

    });

    describe('removeItemsByStatus', () => {

        test('Remove all items of provided status', () => {

            const listItems = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'done',
                message: 'message 2'
            }, {
                id: 3,
                status: 'todo',
                message: 'message 4'
            }, {
                id: 4,
                status: 'done',
                message: 'message 4'
            }];

            wrapper.setState({ listItems });

            instance.removeItemsByStatus('done');

            const expected = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 3,
                status: 'todo',
                message: 'message 4'
            }]

            expect(wrapper.state('listItems')).toEqual(expected);

        });

    });

    describe('removeItemByID', () => {

        test('Remove correct item from items list', () => {

            const listItems = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'done',
                message: 'message 2'
            }, {
                id: 3,
                status: 'todo',
                message: 'message 4'
            }, {
                id: 4,
                status: 'done',
                message: 'message 4'
            }];

            wrapper.setState({ listItems });

            instance.removeItemByID(2);

            const expected = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 3,
                status: 'todo',
                message: 'message 4'
            }, {
                id: 4,
                status: 'done',
                message: 'message 4'
            }]

            expect(wrapper.state('listItems')).toEqual(expected);

        });

    });

    describe('changeItemStatus', () => {

        test('Updates status correctly', () => {

            const listItems = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'done',
                message: 'message 2'
            }, {
                id: 3,
                status: 'todo',
                message: 'message 4'
            }, {
                id: 4,
                status: 'done',
                message: 'message 4'
            }];

            wrapper.setState({ listItems });

            instance.changeItemStatus(3, 'done');
            
            const expected = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'done',
                message: 'message 2'
            }, {
                id: 3,
                status: 'done',
                message: 'message 4'
            }, {
                id: 4,
                status: 'done',
                message: 'message 4'
            }];

            expect(wrapper.state('listItems')).toEqual(expected);

        });

    });

    describe('addToList', () => {

        test('Resets newItemText value', () => {

            wrapper.setState({ newItemText: 'hey '});
            instance.addToList();

            expect(wrapper.state('newItemText')).toBe('');

        });

        test('Adds new item to list of items', () => {

            const listItems = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'done',
                message: 'message 2'
            }];

            instance.idCount = 3;
            wrapper.setState({ listItems });

            instance.addToList('My new message');
            
            const expected = [{
                id: 1,
                status: 'todo',
                message: 'message 1'
            }, {
                id: 2,
                status: 'done',
                message: 'message 2'
            }, {
                id: 3,
                status: 'todo',
                message: 'My new message'
            }];

            expect(wrapper.state('listItems')).toEqual(expected);

        });

    });

});
