import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Page', () => {
	test('renders the page', () => {
		const app = shallow(<App />);
		expect(app).toMatchSnapshot();
	}); 
});
