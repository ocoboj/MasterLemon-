import {Header} from './header';
import * as React from 'react';
import {shallow} from 'enzyme';

describe('pages/members/list/components/header specs', () => {
    it('should render as expected header', () => {
        const component = shallow(<header></header>);
        expect(component).toMatchSnapshot();
    });
});