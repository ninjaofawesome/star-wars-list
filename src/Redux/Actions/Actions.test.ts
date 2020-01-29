import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { testArr } from '../../Utils/testingUtils';
import Table from '../../Components/Table/Table';

import { 
    formatPeopleData,
    sortArrayData,
} from '../../Utils/utilityFunctions';

import { 
    fetchPeople,
    sortAscending,
    sortDescending,
} from './Actions';

const mockStore = configureStore([]);

describe('Action Tests', () => {
    it('should load the formatted api info on page load', () => {
        const initialState = { people: [] };
        const store = mockStore(initialState);
        store.dispatch(fetchPeople());
        const actions = store.getActions();
        const peoplePayload = [{
            type: FETCH_PEOPLE_SUCCESS,
            people: formatPeopleData(data.results)
        }];
        expect(actions).toEqual(peoplePayload);
    });

    it('should load ascending data on button click', () => {
        const initialState = { people: testArr }
        const store = mockStore(initialState);

        store.dispatch(sortAscending('name', testArr));
        const actions = store.getActions();
        const ascArr = sortArrayData('name', testArr, 'asc');
        const expectedAscPayload = [{ 
            type: 'SORT_ITEMS_ASCENDING',
            sortBy: ascArr,
        }];
        expect(actions).toEqual(expectedAscPayload);
    });

    it('should load descending data on button click', () => {
        const initialState = { people: testArr }
        const store = mockStore(initialState);

        store.dispatch(sortDescending('name', testArr));
        const actions = store.getActions();
        const descArr = sortArrayData('name', testArr, 'desc');
        const expectedDescPayload = [{ 
            type: 'SORT_ITEMS_DESCENDING',
            sortBy: descArr,
        }];
        expect(actions).toEqual(expectedDescPayload);

    });
});
