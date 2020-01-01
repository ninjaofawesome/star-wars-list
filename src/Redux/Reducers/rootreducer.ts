import { combineReducers } from 'redux';
import { 
	FETCH_PEOPLE_SUCCESS,
	SORT_ITEMS_ASCENDING,
	SORT_ITEMS_DESCENDING, 
} from '../Actions';

// utils
//import { compareStrings } from '../../Utils/utilityFunctions';  

const peopleState = {
  people: [],
};

export const peopleReducer = (state = peopleState, action: any) => {
	switch(action.type) {
		case FETCH_PEOPLE_SUCCESS:
			console.log('people')
			return Object.assign({}, state, { people: action.people });
		case SORT_ITEMS_ASCENDING:
			console.log('asc', action);
			return state;
		case SORT_ITEMS_DESCENDING:
			console.log('desc', action);
			return state;
		default:
			console.log('I am default')
			return state;
	}
};

export default combineReducers({
	peopleReducer,
});