import { combineReducers } from 'redux';
import { 
	FETCH_PEOPLE_SUCCESS,
	SORT_ITEMS_ASCENDING,
	SORT_ITEMS_DESCENDING, 
} from '../Actions'; 

import { 
    compareValues 
} from '../../Utils/utilityFunctions';

const peopleState = {
  people: [],
};

export const peopleReducer = (state = peopleState, action: any) => {
	switch(action.type) {
		case FETCH_PEOPLE_SUCCESS:
			return Object.assign({}, state, { people: action.people });
		case SORT_ITEMS_ASCENDING:
			const ascArr = state.people.sort(compareValues(action.data));
			return Object.assign({}, state, { people: ascArr })
		case SORT_ITEMS_DESCENDING:
			const descArr = state.people.sort(compareValues(action.data, 'desc'));

			return Object.assign({}, state, { people: descArr })
		default:
			return state;
	}
};

export default combineReducers({
	peopleReducer,
});