import { combineReducers } from 'redux';

const peopleState = {
  people: [],
};

export const peopleReducer = (state = peopleState, action: any) => {
	switch(action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	peopleReducer,
});