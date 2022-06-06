# Global Trading Co. - React learning project

This is a project to learn [React.js](https://reactjs.org/). A fun project for polishing frontend development skills. Not only is React learned in this project, so are many others that will be listed is the "Built with" section.

## Table of contents

- [Overview](#overview)
  - [The gaols](#the-goals)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The goals

- Users should be able to create a new account
- Users be able to log in with a newly created account
- Users should be able to log in with Google or other social media account
- Users should be able to log out
- Users should see the optimal layout for their device's screen size
- See hover states for interactive elements
- Make a selection of which item to add to cart
- See an updated items count in the shopping icon & dropdown
- See the total number of items on the checkout page
- Remove items from cart

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Global Trading Company](https://chipper-heliotrope-f96e3b.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) -  A standard library for routing in React
- [Redux](https://redux.js.org/) - Predictable State Container for JS Apps
- [React Redux](https://react-redux.js.org/) - Official React bindings for Redux
- [Redux Logger](https://github.com/LogRocket/redux-logger) - A production Redux logging tool
- [Reselect](https://github.com/reduxjs/reselect) - A library for creating memoized "selector" functions.
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a redux store
- [SASS](https://sass-lang.com/) - Sass is a powerful professional grade CSS extension language
- [Styled Components](https://styled-components.com/) - Use the best bits of ES6 and CSS to style your apps without stress
- [Firebase](https://firebase.google.com/) - Quickly develop high-quality apps

### What I learned

The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Using the reduce method here to produce the item count contained in the cart icon.

```js
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
          (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
          0
  ),
});
```

### Continued development

This section will outline areas that need continuing improvements or new components to be added. focusing on the future of the project. These could be concepts still not completely flushed out, or techniques that are new and need to be refined and perfected.

## Author

- Website - [Walker Designs](https://www.your-site.com)
- LinkedIn - [robert-walker-029503221](https://www.linkedin.com/in/robert-walker-029503221/)
- Twitter - [@RobertW15135868](https://twitter.com/RobertW15135868)
