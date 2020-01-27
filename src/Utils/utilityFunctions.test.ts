import {
	formattedDate,
	formatPeopleData,
	compareValues,
	formatData,
	sortArrayData,
} from './utilityFunctions';

describe('Utility function tests', () => {
	it('should show a MM/DD/YYYY formatted date when the formattedDate function is used', () => {
		const testCreatedDate = "2014-12-19T13:50:51.644000Z";
		expect(formattedDate(testCreatedDate)).toEqual('12/19/2014');
	});

	it('Should return a formatted array of objects with the necessary data when the formatPeopleData is used', () => {
		const objectArr = [
			{
				"name": "Luke Skywalker",
				"height": "172",
				"mass": "77",
				"hair_color": "blond",
				"skin_color": "fair",
				"eye_color": "blue",
				"birth_year": "19BBY",
				"gender": "male",
				"homeworld": "https://swapi.co/api/planets/1/",
				"films": [
					"https://swapi.co/api/films/2/",
					"https://swapi.co/api/films/6/",
					"https://swapi.co/api/films/3/",
					"https://swapi.co/api/films/1/",
					"https://swapi.co/api/films/7/"
				],
				"species": [
					"https://swapi.co/api/species/1/"
				],
				"vehicles": [
					"https://swapi.co/api/vehicles/14/",
					"https://swapi.co/api/vehicles/30/"
				],
				"starships": [
					"https://swapi.co/api/starships/12/",
					"https://swapi.co/api/starships/22/"
				],
				"created": "2014-12-19T13:50:51.644000Z",
				"edited": "2014-12-29T21:17:56.891000Z",
				"url": "https://swapi.co/api/people/1/"
			}
		];

		expect(formatPeopleData(objectArr)).toStrictEqual([{
			"name": "Luke Skywalker",
				"height": "172",
				"mass": "77",
				"hair_color": "blond",
				"eye_color": "blue",
				"created": "12/19/2014",
				"edited": "12/29/2014"
		}]);
	});

})