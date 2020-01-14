# Star Wars List

## What is this?

A Star Wars themed sortable list, made in React with Typescript.  You can see how I built it [Here](https://trello.com/c/wJPquBU5)

## How I did it

I invite you to check out the commit history on this repo for a more detailed background on what I did and when.  

But, the TL:DR; is that I created actions and modeled my reducers around loading the data, then sorting the data in ascending order or descending order.  Additionally, I created a set of basic styled table elements and a handful of utility functions to help make my life easier.

I understood that sorting an array is an imperfect science in Javascript, and I cannot take credit for creating the sort function itself.  (Thanks [SitePoint](https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/)!).  However, I didn't blindly copy and paste this in and hope for the best- I took the time to pick apart this function (additionally because the sorted data wasn't updating at some point during the development process).

## Challenges

As mentioned above, at one point I couldn't figure out why the data in my reducers was updating but my views were not (check out ticket SWL-13 for more details on that one).  I'm still not entirely sure what was going on there- if there was somehow a race condition within the sorting and formatting utility functions, if I was mutating the data inadvertently, or maybe even just that I was passing back an unfired function for the updated state.  However, I discovered the "quick fix" was to assign functions to variables and to clone the data array in the actions for ascending and descending data.

Additionally, getting the redux devtools to work as anticipated was a bit of a pain as well in typescript- I was getting error after error that I wasn't defining types properly and in the proper spots, but I eventually figured it out after googling a bit.

## Technical Details
Running the app:
```
npm start
```

Testing the app:
```
npm test
```