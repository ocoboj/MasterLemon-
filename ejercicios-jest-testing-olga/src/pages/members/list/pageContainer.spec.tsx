import * as React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { State } from '../../reducers';
import * as mappers from './mappers';
import * as fetchMemberActions from './actions/fetchMembers';
import { MemberListPageContainer } from './pageContainer';
import { login } from '../../../rest-api/api/login';


const getMockStore = configureStore();

describe('pages/members/list/pageContainer spec', () => {

    it('should call to fetchMember action when render component', () => {
        const state = {
            members: [
                {
                    id: 4,
                    login: 'test login 4',
                    avatar_url: 'test avatar_url 4'
                },
            ],
        } as State;

        const store = getMockStore(state);

        const fetchMembers = jest.spyOn(fetchMemberActions, 'fetchMembers').mockImplementation(() => ({
            type: 'test action type',
        }));

        const component = mount(
            <MemberListPageContainer />,
            {
                context: { store },
            }
        );

        expect(fetchMembers).toHaveBeenCalled();
        expect(fetchMembers).toMatchSnapshot();
    });

    it ('should call to mapMemebersListModelToVM when render component', () => {
        const state = {
            members: [
                {
                    id: 2,
                    login: 'test login 2',
                    avatar_url: 'test avatar_url 2'

                }
            ]
        } as State;

        const store = getMockStore(state);

        const mapMemeber = jest.spyOn(mappers, 'mapMemberListModelToVM').mockReturnValue([
            {
                id: 3,
                name: 'test login 3',
                avatarUrl: 'test avatar_url 3'
            }
        ]);

        const component = shallow(
            <MemberListPageContainer />,
            {
                context: {store}
            },
        );
        expect(mapMemeber).toHaveBeenCalled();
        expect(mapMemeber).toMatchSnapshot();
    });

    it('should render when passing of the sate', () => {
        const state = {
            members: [
                {
                    id: 6,
                    login: 'test login 6',
                    avatar_url: 'test avatar_url 6'
                }
            ]
        } as State;
        
        const store = getMockStore(state);

        const component = shallow (
            <MemberListPageContainer />,
            {
                context: {store}
            }
        );
        expect(component).toMatchSnapshot();
    })
})
