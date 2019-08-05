# FoodFinder

### About
FoodFinder is an application that displays given Restaurant data in a card or 
list table format. The user is able to perform actions on the displayed data
to refine their search. <br/>
Site hosted at https://foodfindersite.netlify.com/.

### Contact Info
Max Wheeler <br/>
ewheel17@gmail.com <br/>

### Technology Used
Frontend Framework: Vue<br/>
UI Library: Vuetify<br/>
State Management: Vuex<br/>
Language: Typescript<br/>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## Notes
* This application is displaying information supplied purely on the frontend. I built this 
app in such a way that it expects a system to be set up to eventually make server calls.

## Potential Enhancements
* CRITICAL: Go back through and remove as many "any" types as possible, if not all of them.
This is a common pitfall for devs new to Typescript, but "any" is useful for fast prototyping as long as they don't make it
to production.
* Ability to save and view Favorites.
* Ability to submit new Restaurants.
* Implement a backend to serve data, rather than using dummy data.
* Store and retrieve restaurant information from a Database.
* Add register/login functionality.
* Many things are conditionally displayed based on values directly from state. This works here,
but best practice would include getters in the store file. I did not include them because I wanted
to give other aspects for attention for the time being.
* Distinct Unit tests could be implemented to ensure quality.
