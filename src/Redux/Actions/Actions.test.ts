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
        /* todo: something like this: https://medium.com/@rishabhsrao/mocking-and-testing-fetch-with-jest-c4d670e2e167 */
    });

    it('should load ascending data on button click', () => {

    });

    it('should load descending data on button click', () => {

    });
});
