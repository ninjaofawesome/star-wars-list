import { combineReducers } from 'redux';
import { FETCH_PEOPLE_SUCCESS } from '../Actions';

const peopleState = {
  people: [],
};

export const peopleReducer = (state = peopleState, action: any) => {
	switch(action.type) {
		case FETCH_PEOPLE_SUCCESS:
			return Object.assign({}, state, { people: action.people });
		default:
			return state;
	}
};

export default combineReducers({
	peopleReducer,
});