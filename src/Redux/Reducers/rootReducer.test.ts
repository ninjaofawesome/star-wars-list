import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { 
	FETCH_PEOPLE_SUCCESS,
	SORT_ITEMS_ASCENDING,
	SORT_ITEMS_DESCENDING, 
} from '../Actions/Actions'; 
import { 
	testArr,
	testArrAsc,
 } from '../../Utils/testingUtils';
import { peopleReducer } from './rootreducer';

describe('people reducer tests', () => {
	const mockState = { people: []};

	it('should return the initial state', () => {
		expect(peopleReducer(mockState, {})).toEqual({people: []})
	});

	it('should handle FETCH_PEOPLE_SUCCESS', () => {
		const successFetchState = {
			type: FETCH_PEOPLE_SUCCESS,
			people: testArr,
		}
		expect(peopleReducer(mockState, successFetchState)).toEqual({people: testArr})
	});

	it('should handle SORT_ITEMS_ASCENDING', () => {
		// handle sorting ascending people state
	});

	it('should handle SORT_ITEMS_DESCENDING', () => {
		// handle sorting descending people state
	});
})