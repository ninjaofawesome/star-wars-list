import { combineReducers } from 'redux';
import { 
	FETCH_PEOPLE_SUCCESS,
	SORT_ITEMS_ASCENDING,
	SORT_ITEMS_DESCENDING, 
} from '../Actions/Actions'; 

const peopleState = {
  people: [],
};

export const peopleReducer = (state = peopleState, action: any) => {
	switch(action.type) {
		case FETCH_PEOPLE_SUCCESS:
			return Object.assign({}, state, { people: action.people });
		case SORT_ITEMS_ASCENDING:
			return Object.assign({}, state, { people: action.sortBy })
		case SORT_ITEMS_DESCENDING:
			return Object.assign({}, state, { people: action.sortBy })
		default:
			return state;
	}
};

export default combineReducers({
	peopleReducer,
});