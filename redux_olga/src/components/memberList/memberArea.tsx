import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member';
import { OrganizationState } from '../../reducers/memberReducer'

interface Props {
  organization: OrganizationState;
  onChange: (name: string) => void;
  members: Array<MemberEntity>;
  loadMembers: (organization: string) => any;
}

export const MemberAreaComponent = (props : Props) => {
  return (
  <div>
      
      <input type="text" value={props.organization.organization} onChange={(e) => props.onChange(e.target.value)}/>
      <input type="submit"
              value="load"
              className="btn btn-default"
              onClick={() => props.loadMembers(props.organization.organization)}
      />
        <br/>
  <MemberTableComponent members={props.members}/>
  </div>
  
  );
}
