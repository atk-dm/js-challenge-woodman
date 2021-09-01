This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies

```
yarn
```

Start the server

```
yarn dev
```

## Read the documentation

- https://www.openbrewerydb.org/documentation
- https://nextjs.org/docs
- https://swr.vercel.app/docs/getting-started
- https://styled-components.com/docs
- https://reactjs.org/docs/hooks-overview.html

## Project Overview

This application has a few basic pages which display data from the Open Brewery Database API. The Home page, Search page and Brewery Detail page represent a typical information hierarchy which exists on many sites. Your task is to fix a few bugs, add some features and clean up this version of the application.

Below are several tasks from which you can choose. _**Please choose at least 3 of these tasks.**_ Spend no more than 4 hours on this coding challenge.

## Challenges

- CHALLENGE-1: Accessibility
  - Use what you know about A11Y to find and fix potential A11Y issues throughout the site
- CHALLENGE-2: Testing
  - There is one very basic test in this project and that's pretty terrible. Provide additional test coverage for untested components.
  - Use any library or setup you are prefer
  - Can you mock network requests?
  - Can you simulate user interactions?
- CHALLENGE 3: Search Autocomplete in the site header
  - The results presented should link directly to the brewery detail page.
  - Hitting enter on the form should **route** the user to the brewery search page.
  - Pay special attention to performance and accessibility
- CHALLENGE 4: General Cleanup
  - Several components render data that's sometimes `null`.
  - Suppress any empty DOM nodes or, provide a sensible default
  - Styles
    - The current app isn't exactly hard on the eyes but it's not a work of art either.
    - Enhance the visual display of the application - get creative. Use maps, data formatting, placeholder images, etc. Spruce it up a little!
  - Error handling (timeouts, try/catch, etc). This app is pretty darn optimistic at the moment. Introduce some better error handling to account for the unpredictable nature of the web.
- CHALLENGE 5: Search loading state
  - Most sites include a 'loading' or skeleton component while data populates
  - Create a nice loading state for the results grid.
- CHALLENGE 6: Search page pagination
  - create a basic pagination controls to move between paged recordsets
- CHALLENGE 7: Index page brewery type browsing controls
  - The Brewery API allows easy filtering by [Brewery Type](https://www.openbrewerydb.org/documentation/01-listbreweries).
  - Add filter controls to the index page (and search page if you want)
  - Pay attention to performance and A11Y
- CHALLENGE 8: Index page grid geolocation
  - The featured brewery on the home page uses a popular geolocation hook. Expand the use of this hook so the user's location can be easily used in other components by using Context.
  - Provide a fallback location in the event a user declines sharing their location.

## Final Instructions

- Please have no more than one commit per task. If you would like to commit more frequently along the way, that's fine but please squash your commits.
- Label your commit message based on the challenge id.
  - For Example: `CHALLENGE2 - adding tests for components x, y, z`
- If you have questions along the way, please email jason.aslakson@americastestkitchen.com
- Have fun with the exercise and don't feel too much pressure

## Tim Woodman Notes

### CHALLENGE 3: Search AutoComplete in the site header

#### Methodology

- I moved the search form component in the BreweryLayout to it's own component `<SearchAutoComplete>`.
- Utilizing the OpenBrewery autocomplete API a call is made on each input change in the search field
- The result is passed into a new state, and the first 5 results are mapped to make the suggestion list.
- Clicking the list item redirects to the Brewery detials using next/link and the clicked brewery id.
- Sumbit event still brings user to the brewery search page with the current input value.

### CHALLENGE 5: Search loading state

- Utilized the existing component load logic in the BrewerySearch component for the `<BrewerySummaryGrid>` element. If brewery data is passed to the element load it if not load the `<BreweryLoading>` element.
- I wanted to do somethign fun and play around with some animation for this one. I feel like the bottle/mug "cheers was a good fit. I played around with the animation time so that the animation was viewable on most load times.

### CHALLENGE 8: Index page grid geolocation

#### Methodology

- I chose to use the [Kenn Dodd Method](https://kentcdodds.com/blog/how-to-use-react-context-effectively) to implement React context in
  to this project.
- The PositionContext is set up in utils/PositionContext.js
- The data from the usePosition hook and the fallback coordinates (ATK Headquarters) is provided to the context in the root \_app.js page
- The context is then imported in the components/FeaturedBrewery/index.js file.
- Created a new variable `OpenBreweryURL` (line 22) to hold the path used by useSWR with dynamic latitude and longitude. Use the UsePosition data if it exists, if the location is blocked by user, default to the fall back coordinates provided by the PositionContext.

#### Coding Challenge Notes & Feedback

- The Open Brewery API sends back the same item for any coordinates passed in. I found this issue when testing the usePosition hook vs the fallback coordinates in the FeaturedBrewery component. It sends back Bnaf, LLC every time with `{"longitude": null, "latitude": null}`
- I tested some more coordinates in Postman with similar results

Downtown San Diego Coords
![San Diego Postman test]("./public/SDtest.PNG")

Downtown Portland, ME Coords
![Portland Test]("./public/Portland_test.PNG")
