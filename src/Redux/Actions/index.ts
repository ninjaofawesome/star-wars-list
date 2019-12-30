export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';

const formatPeopleData = (data: any) => (
  data.map((item: any) =>({
      name: item.name,
      height: item.height,
      mass: item.mass,
      eye_color: item.eye_color,
      hair_color: item.hair_color,
      created: item.created,
      edited: item.edited,
  }))
)

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


