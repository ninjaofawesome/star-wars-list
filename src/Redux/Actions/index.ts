// utils
import { 
    formatPeopleData,
    compareValues,
    formatData,
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

export const sortAscending = (sortData: string, arr: Array<Object>) => {
    const ascFormattedData = formatData(sortData);
    const vals = compareValues(ascFormattedData)
    const ascArr = [...arr].sort(vals);
    return ({
        type: SORT_ITEMS_DESCENDING,
        sortBy: ascArr,
    });
};

export const sortDescending = (sortData: string, arr: Array<Object>) => {
    const descFormattedData = formatData(sortData);
    const vals = compareValues(descFormattedData, 'desc')
    const descArr = [...arr].sort(vals);
    return ({
        type: SORT_ITEMS_DESCENDING,
        sortBy: descArr,
    });
};
