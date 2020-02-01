// utils
import { 
    formatPeopleData,
    sortArrayData,
} from '../../Utils/utilityFunctions';

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

export const sortAscending = (sortData = '', arr=[{}]) => {
    const ascArr = sortArrayData(sortData, arr, 'asc');
    return ({
        type: SORT_ITEMS_ASCENDING,
        sortBy: ascArr,
    });
};

export const sortDescending = (sortData = '', arr=[{}]) => {
    const descArr = sortArrayData(sortData, arr, 'desc');
    return ({
        type: SORT_ITEMS_DESCENDING,
        sortBy: descArr,
    });
};
