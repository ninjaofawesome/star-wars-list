import React from 'react';
import configureStore from 'redux-mock-store';
import { 
	FETCH_PEOPLE_SUCCESS,
	SORT_ITEMS_ASCENDING,
	SORT_ITEMS_DESCENDING, 
} from '../Actions/Actions'; 
import { shallow } from 'enzyme';
import { testArr } from '../../Utils/testingUtils';
import { peopleReducer } from './rootreducer';

describe('people reducer tests', () => {
	it('should return the initial state', () => {
		// handle initial loading state
	});
	it('should handle FETCH_PEOPLE_SUCCESS', () => {
		// handle fetching people state
	});
	it('should handle SORT_ITEMS_ASCENDING', () => {
		// handle sorting ascending people state
	});
	it('should handle SORT_ITEMS_DESCENDING', () => {
		// handle sorting descending people state
	});
})