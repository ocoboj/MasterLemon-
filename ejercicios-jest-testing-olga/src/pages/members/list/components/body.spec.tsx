import * as React from 'react';
import { Body } from './body';

import { mount } from 'enzyme';


describe('pages/members/list/components/body specs', () => {
  it('should render as expected when passing one item', () => {

    const props ={
      members:[
          {
              id: 5,
              name: 'name test',
              avatarUrl: 'url test',
          }
        ]    
    }

    const component = mount(<Body {...props}/>);

    expect(component).toMatchSnapshot();
  });

  it('should render as expected when passing more than one item ', () => {

    const props = {
      members:[
        {
          id: 6,
          name: 'name test 6',
          avatarUrl: 'url test 6',
        } ,
        {
          id: 8,
          name: 'name test 8',
          avatarUrl: 'url test 8',
       } 
      ]
    };

    const component = mount(<Body {...props}/>);

    expect(component).toMatchSnapshot();
   
  });



});