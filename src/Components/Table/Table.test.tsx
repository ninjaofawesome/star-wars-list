import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Table from './Table';

const mockStore = configureStore([]);

describe('Table Component', () => {
	let store;
	let tableComponent;

	beforeEach(() => {
		store = mockStore({
		  	fetchPeople: () => {},
		  	allPeople: [{}],
		});

		tableComponent = shallow(
		    <Provider store={store}>
		    	<Table />
		    </Provider>
		);
	});

	it('renders the table with props', () => {
		const tableProps = tableComponent.props().value.store.getState();
		expect(Object.keys(tableProps)).toEqual([ 'fetchPeople', 'allPeople' ]);
	}); 
});