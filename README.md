# [Star Wars List](http://hereshannahs.info/star-wars-list/): The Sort Is Strong With This One

## What is this?

A Star Wars themed sortable list, made in React with Typescript, complete with testing.  You can see how I built it [Here](https://trello.com/b/RcrzVscg/star-wars-list).  

## How I did it

I invite you to check out the commit history on this repo for a more detailed background on what I did and when.  Also included are any pain points that I experienced along the way.  

But, the TL:DR; is that I created actions and modeled my reducers around loading the data, then sorting the data in ascending order or descending order.  Additionally, I created a set of basic styled table elements and a handful of utility functions to help make my life easier.

Next, I tested some of the components, actions and reducers with Jest and Enzyme. My goals for this was to ensure that the components render as anticipated, the actions fire as anticipated and the reducers behave as anticipated.  Additionally, I tested the utility functions because they do quite a bit of the heavy lifting in this app to format and sort data.

Additionally, the original sort function that I used in this project was from [here](https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/).  It worked excellently for sorting strings in an ascending or descending order, but not for numbers. My contributions was to thinker with it to sort both.

## Challenges

The largest challenge that I had in this project was that at some point my view was not updating when I clicked the ascending or descending buttons.  I'm not entirely sure why this was happening, but my best guesses would have been that I was either trying to pass a function in through the object in the actions, or there was some sort of race condition going on, or that I was trying to return mutated data.  The quick fix answer was to clone the array of data that I was using and additionally assign the functions to format said data into arrays, but I still don't *fully* grasp what the solve was for in this.

Also, getting the redux devtools to work as anticipated was a bit of a pain as well in typescript- I was getting error after error that I wasn't defining types properly and in the proper spots, but I eventually figured it out after googling a bit.

Lastly, after writing some of the reducer tests, the action tests (which previously passed) were behaving oddly- as in failing for no reason- especially around the asynchronous action of fetching data.  The upshot out of that though is that I was forced to dive in to mocking data and how to call asynchronously in those tests.

## What was great about this project

Overall, the best parts of this project were that I got to learn new things that I wasn't entirely familiar with.  

For example, I use TypeScript daily, but I actually have little idea about how it works.  Star Wars List gave me a lot more knowledge on how TypeScript works, so now it's less onerous for me to use it in my day-to-day life.

Testing connected components has been somewhat of a mystery to me, so I'm glad that I got to look into that and force myself to get familiar with it.  Now that I have, I'm much happier and will probably refer back to this as a starting point for other components that I want to test!

In conclusion, it was fun building Star Wars List.  It's a simple enough project, but I had a blast (a photon?) of fun learning how all these tools work without the benefit of someone else doing these things before me. 

Questions?  Thoughts?  Suggestions?  Contact me.  My info should be in my profile.

## Technical Details
Running the app:
```
npm start
```

Testing the app:
```
npm test
```