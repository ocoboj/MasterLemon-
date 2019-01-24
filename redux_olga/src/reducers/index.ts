import { combineReducers} from 'redux';
import { memberReducer, memberState, OrganizationState, organizationReducer} from './memberReducer';

export interface State {  
  memberReducer : memberState;
  organizationReducer : OrganizationState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  organizationReducer
});
