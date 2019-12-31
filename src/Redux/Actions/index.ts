// utils
import { formatPeopleData } from '../../Utils/utilityFunctions';

export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';

export const fetchPeopleSuccess = (people: any) => ({
  type: FETCH_PEOPLE_SUCCESS,
  people: formatPeopleData(people),
});

export const fetchPeople = () => (
  (dispatch: any) => {
    fetch('https://swapi.co/api/people')
    .then(results => results.json())
    .then(data => dispatch(fetchPeopleSuccess(data.results)))
    .catch(error => console.log('oh noes, something went wrong! ', error));
  }
);


