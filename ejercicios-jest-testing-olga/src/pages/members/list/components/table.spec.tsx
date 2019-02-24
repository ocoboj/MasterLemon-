import * as React from 'react';
import { mount } from 'enzyme';
import { Table } from './table';



describe('pages/members/list/components/table spec', () => {

    it('should render as expected when passing one item', () => {

        const prop = {
            title: 'Testing Header',

            members:[
                {
                    id: 8,
                    name: 'name test 8',
                    avatarUrl: 'url test 8'
                }
            ]
        }

        const component = mount(<Table {...prop}/>);

        expect(component).toMatchSnapshot();
    });

    it('should render as expected when passing more items', () => {
        const prop = {
            title: 'Testing Header',

            members: [
                {
                    id: 3,
                    name: 'name test 3',
                    avatarUrl: 'url test 3'
                },
                {
                    id: 7,
                    name: 'name test 7',
                    avatarUrl: 'url test 7'
                },
                {
                    id: 5,
                    name: 'name test 5',
                    avatarUrl: 'url test 5'
                },
                {
                    id: 4,
                    name: 'name test 4',
                    avatarUrl: 'url test 4'
                },
            ]
        }
    })
})