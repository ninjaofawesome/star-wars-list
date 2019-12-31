/* utility function to parse those dates */
export const formattedDate = (newDate: any) => {
	const event = new Date(newDate);
	// // did not add a locale to this for international use purposes.
	return(event.toLocaleDateString())
};