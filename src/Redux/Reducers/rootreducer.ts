import { combineReducers } from 'redux';
import { 
	FETCH_PEOPLE_SUCCESS,
	SORT_ITEMS_ASCENDING,
	SORT_ITEMS_DESCENDING, 
} from '../Actions'; 

import { 
    compareValues,
    formatData, 
} from '../../Utils/utilityFunctions';

const peopleState = {
  people: [],
};

export const peopleReducer = (state = peopleState, action: any) => {
	switch(action.type) {
		case FETCH_PEOPLE_SUCCESS:
			return Object.assign({}, state, { people: action.people });
		case SORT_ITEMS_ASCENDING:
			const ascFormattedData = formatData(action.data);
			const ascArr = state.people.sort(compareValues(ascFormattedData));
			return Object.assign({}, state, { people: ascArr })
		case SORT_ITEMS_DESCENDING:
			const descFormattedData = formatData(action.data);
			const descArr = state.people.sort(compareValues(descFormattedData, 'desc'));
			return Object.assign({}, state, { people: descArr })
		default:
			return state;
	}
};

export default combineReducers({
	peopleReducer,
});