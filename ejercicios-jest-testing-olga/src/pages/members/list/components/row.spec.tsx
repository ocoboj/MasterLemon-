import { shallow } from "enzyme";
import { Row } from "./row";
import * as React from 'react'

describe('pages/member/list/components/ row specs', () => {
    it('should render as expected passing required properties', () => {
        const props = {
            member: {
                id: 3,
                name: 'name test',
                avatarUrl: 'url test',
            }
        }

        const component = shallow(
            <Row {...props}/>
        );

        expect(component).toMatchSnapshot();
    });
});