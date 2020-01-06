// utils
import { formatPeopleData } from '../../Utils/utilityFunctions';

export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const SORT_ITEMS_ASCENDING = 'SORT_ITEMS_ASCENDING';
export const SORT_ITEMS_DESCENDING = 'SORT_ITEMS_DESCENDING';

export const fetchPeople = () => (
  (dispatch: any) => {
    fetch('https://swapi.co/api/people')
    .then(results => results.json())
    .then(data => dispatch({
        type: FETCH_PEOPLE_SUCCESS,
        people: formatPeopleData(data.results)
    }))
    .catch(error => console.log('oh noes, something went wrong! ', error));
  }
);

export const sortAscending = (sortData: string) => ({
    type: SORT_ITEMS_ASCENDING,
    data: sortData,
});

export const sortDescending = (sortData: string) => ({
    type: SORT_ITEMS_DESCENDING,
    sortBy: sortData,
});
