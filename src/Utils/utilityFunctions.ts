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

export const compareStrings = (a: string, b: string) => {
  // Use toUpperCase() to ignore character casing
  const stringA = a.toUpperCase();
  const stringB = b.toUpperCase();

  let comparison = 0;
  if (stringA > stringB) {
    comparison = 1;
  } else if (stringA < stringB) {
    comparison = -1;
  }
  return comparison;
}
