import { combineReducers } from 'redux';
import { 
	FETCH_PEOPLE_SUCCESS,
	SORT_ASCENDING,
	SORT_DESCENDING, 
} from '../Actions';

// utils
import { compareStrings } from '../../Utils/utilityFunctions';  

const peopleState = {
  people: [],
};

export const peopleReducer = (state = peopleState, action: any) => {
	switch(action.type) {
		case FETCH_PEOPLE_SUCCESS:
		console.log('people')
			return Object.assign({}, state, { people: action.people });
		case SORT_ASCENDING:
			console.log(state.people);
			return state;
		case SORT_DESCENDING:
			console.log('desc', action);
			return state;
		default:
			return state;
	}
};

export default combineReducers({
	peopleReducer,
});