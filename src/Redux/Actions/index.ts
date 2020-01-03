// utils
import { 
    formatPeopleData,
    compareValues 
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

export const sortAscending = (sortData: any, allPeople: Array<Object>) => {
    const ascArr = allPeople.sort(compareValues(sortData));
    return ({
        type: SORT_ITEMS_ASCENDING,
        data: ascArr,
    });
}

export const sortDescending = (sortData: string, allPeople: Array<Object>) => {
    const descArr = allPeople.sort(compareValues(sortData, 'desc'));
    console.log(descArr)
    return ({
        type: SORT_ITEMS_DESCENDING,
        sortBy: descArr,
    });
}
