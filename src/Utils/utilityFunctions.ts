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

/* a string comparison function for use in sorting */
const compareValues = (key: any, order = 'asc') => {

  return function innerSort(a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    // checks if string is actually a string of numbers
    const isNum = (val: string) => (/^\d+$/.test(val));

    const varA = (typeof a[key] === 'string' && isNum(a[key]) === false)
      ? a[key].toUpperCase() : parseInt(a[key], 10);
    const varB = (typeof b[key] === 'string' && isNum(b[key]) === false)
      ? b[key].toUpperCase() : parseInt(b[key], 10);

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
const formatData = (data: string) => (
        (data === "eye color" || data === "hair color") ? data.replace(' ', "_") : data);

export const sortArrayData = (sortString: string, arr: Array<Object>, order: string) => {

  const ascFormattedData = formatData(sortString);
  const vals = compareValues(ascFormattedData, order)
  return [...arr].sort(vals);

};

