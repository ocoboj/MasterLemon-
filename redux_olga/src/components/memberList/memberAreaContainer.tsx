import { connect } from 'react-redux';
import { memberRequest } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';
import { updateNames } from '../../actions/updateNames';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer,
      organization: state.organizationReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (organization: string) => dispatch(updateNames(organization)),
    loadMembers: (organization: string) => { return dispatch(memberRequest(organization)) }
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
