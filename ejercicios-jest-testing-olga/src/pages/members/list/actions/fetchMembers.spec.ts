import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import * as apiMember from '../../../../rest-api/api/member';
import { Member } from '../../../../rest-api/model';
import { actionIds } from './actionIds';
import { fetchMembers } from './fetchMembers';

const middlewares = [reduxThunk];
const getMocKStore = configureStore(middlewares);

describe('members/list/actions/fetchMembers specs', () => {

  it('should dispatch action UPDATE_MEMBERS and payload with members', (done) => {

    const members: Member[] = [
      {
        id: 1,
        login: 'test login',
        avatar_url: 'test url',
      },
    ];

    const fetchMember = jest.spyOn(apiMember, 'fetchMembers')
      .mockResolvedValue(members);

    const store = getMocKStore();
    store.dispatch<any>(fetchMembers())
      .then(() => {
        const expectAction = store.getActions()[0];
        expect(expectAction.type).toEqual(actionIds.UPDATE_MEMBERS);
        expect(expectAction.type).toMatchSnapshot();
        expect(expectAction.payload).toEqual(members);
        expect(expectAction.payload).toMatchSnapshot();
        done();
      });
  });

  it('should call to apiMember', async () => {

    const fetchMember = jest.spyOn(apiMember, 'fetchMembers').mockResolvedValue([]);

    const store = getMocKStore();
    await store.dispatch<any>(fetchMembers());

    expect(fetchMember).toHaveBeenCalled();
    expect(fetchMember).toMatchSnapshot();
  });

});