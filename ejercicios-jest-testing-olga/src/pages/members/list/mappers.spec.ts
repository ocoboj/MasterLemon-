import * as model from '../../../rest-api/model';
import * as vm from './viewModel';
import {mapMemberListModelToVM} from './mappers';

describe('pages/members/list/mappers specs', () => {
    describe('mapMemberListModelToVm', () => {

        it('should return empty array when passing members equals []', () => {
            const member: model.Member[] = [];
            const result = mapMemberListModelToVM(member);
            expect(result).toEqual([]);
            expect(result).toMatchSnapshot();
        })

        it('should return array when members are equals undefined', () => {
            const member: model.Member[] = undefined;
            const result = mapMemberListModelToVM(member);
            expect(result).toEqual([]);
            expect(result).toMatchSnapshot();
        });
    });

    it('should return array with item when passing memebers if equals array with item', () => {
        const member: model.Member[] = [
            {
                id:3,
                login: 'test login',
                avatar_url: 'test avatar',
            },
        ];
        const result = mapMemberListModelToVM(member);

        const expectRes: vm.Member[] = [
            {
                id: 3,
                name: 'test login',
                avatarUrl: 'test avatar'
            },
        ];
        expect(result).toEqual(expectRes);
        expect(result).toMatchSnapshot();
    });
    
    it('should return array with 3 items when passing members equals array', () => {
        const member: model.Member[] = [
            {
                id:6,
                login: 'test login 6',
                avatar_url: 'test avatar 6'
            },
            {
                id: 8,
                login: 'test login 8',
                avatar_url: 'test avatar 8'
            },
            {
                id: 10,
                login: 'test login 10',
                avatar_url: 'test avatar 10'
            },
          
        ];
        const result = mapMemberListModelToVM(member);

        const expectRes: vm.Member[] = [
            {
                id:6,
                name: 'test login 6',
                avatarUrl: 'test avatar 6'
            },
            {
                id: 8,
                name: 'test login 8',
                avatarUrl: 'test avatar 8'
            },
            {
                id: 10,
                name: 'test login 10',
                avatarUrl: 'test avatar 10'
            },
         
        ];
        expect(result).toEqual(expectRes);
        expect(result).toMatchSnapshot();
    });
    
    it('should return empty array when passing members equal null', () => {
        const member : model.Member [] = null;

        const result = mapMemberListModelToVM(member);

        expect(result).toEqual([]);
        expect(result).toMatchSnapshot();
    });
});