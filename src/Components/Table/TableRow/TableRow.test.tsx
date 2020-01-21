import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import TableRow from './TableRow';

const mockStore = configureStore([]);

describe('Table Row Component', () => {
	let store;
	let tableRowComponent;

	beforeEach(() => {
		store = mockStore({
		  	allPeople: [{
		  		name: "Luke Skywalker",
		  		height: "172",
		  		mass: "77",
		  		eye_color: "blue",
		  		hair_color: "blond",
		  		created: "12/9/2014",
		  		edited: "12/20/2014",
		  	}],
		});

		tableRowComponent = shallow(
		    <Provider store={store}>
		    	<TableRow />
		    </Provider>
		);
	});

	it('maps state to the row component', () => {
		expect(tableRowComponent.props().value.store.getState().allPeople.length).toEqual(1);
	}); 
});