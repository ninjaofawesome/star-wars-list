import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { 
    testArr,
    mockData,
} from '../../Utils/testingUtils';
import Table from '../../Components/Table/Table';

import { 
    formatPeopleData,
    sortArrayData,
} from '../../Utils/utilityFunctions';

import { 
    FETCH_PEOPLE_SUCCESS,
    SORT_ITEMS_ASCENDING,
    SORT_ITEMS_DESCENDING, 
} from './Actions'; 

import { 
    fetchPeople,
    sortAscending,
    sortDescending,
} from './Actions';

const mockStore = configureStore([thunk]);

const success = () => {
  return {
    type: 'FETCH_PEOPLE_SUCCESS',
    people: formatPeopleData(mockData),
  }
}

const fetchData = () => {
  return dispatch => {
    return fetch('https://swapi.co/api/people') // Some async action with promise
      .then(() => dispatch(success()))
  };
}


describe('Action Tests', () => {
    
    it('should load the formatted api info on page load', () => {
      const initialState = { people: [] };
      const store = mockStore(initialState)

      return store.dispatch(fetchData())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0]).toEqual(success())
        })
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
