import { MembersState, membersReducer } from "./members";
import deepFreeze from 'deep-freeze';
import { actionIds } from "../actions/actionIds";

describe('pages/members/list/reducers/members spec', () => {
    it('should return same state when passing a state and some action type', () => {
        
        const state: MembersState = [
            {
                id: 5,
                login: 'test login 5',
                avatar_url: 'test avatar_url 5'
            }
        ];

        const action = {
            type: 'some type'
        };

        deepFreeze(state);

        const nexState = membersReducer(state, action);

        expect(nexState).toEqual([
            {
                id: 5,
                login: 'test login 5',
                avatar_url: 'test avatar_url 5'
            }
        ]);
        expect(nexState).toMatchSnapshot();
    });

    it('should return update when passing state, members payload and UPDATE_MEMBERS', () => {
        const state: MembersState = [
            {
                id: 3,
                login: 'test login 3',
                avatar_url: 'test avatar_url 3',
                
            }
        ];

        const payload = [
            {
                id: 9,
                login: 'test login 9',
                avatar_url: 'test avatar_url 9'
            }
        ]

        const action = {
            type: actionIds.UPDATE_MEMBERS,
            payload,
        };

        deepFreeze(state)

        const nexState = membersReducer(state, action);

        expect(nexState).toEqual(payload);
        expect(nexState).toMatchSnapshot();
    });
})