/* utility function to parse those dates */
export const formattedDate = (newDate: any) => {
	const event = new Date(newDate);
	// // did not add a locale to this for international use purposes.
	return(event.toLocaleDateString())
};

/* utility function to format data */
export const formatPeopleData = (data: any) => (
    data.map((item: any) => {
        return({
            name: item.name,
            height: item.height,
            mass: item.mass,
            eye_color: item.eye_color,
            hair_color: item.hair_color,
            created: formattedDate(item.created),
            edited: formattedDate(item.edited),
        });
    }) 
);

/* utility function to check if object and get entries */
export const objEntries = (obj: any) => Object.entries(obj).length !== 0 && Object.entries(obj);

/* a string comparison function for use in sorting */

export const compareValues = (key: any, order = 'asc') => {

  return function innerSort(a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) { 
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };

  // return innerSort(, b);
}

/* utility function to format data for reducer */
export const formatData = (data: string) => (
        (data === "eye color" || data === "hair color") ? data.replace(' ', "_") : data);
