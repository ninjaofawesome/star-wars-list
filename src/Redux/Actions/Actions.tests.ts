import React from 'react';
import configureStore from 'redux-mock-store';
import { testArr } from '../../Utils/testingUtils';

import { 
    formatPeopleData,
    sortArrayData,
} from '../../Utils/utilityFunctions';

import { 
    fetchPeople,
    sortAscending,
    sortDescending,
} from './index';

const mockStore = configureStore([]);

describe('Action Tests', () => {
    beforeEach(() => {
        const initialState = { people: [] };
        const store = mockStore(initialState);
        const actions = store.getActions();
    })

    it('should load the formatted api info on page load', () => {
        store.distpatch(fetchPeople());

        const expectedRobotPayload = {
            type: FETCH_PEOPLE_SUCCESS,
            people: formatPeopleData(data.results)
        };

        expect(actions).toEqual(expectedPayload);
    });

    it('should load ascending data on button click', () => {
        console.log('store', store);
        console.log('actions', actions)
    });

    it('should load descending data on button click', () => {

    });
});
