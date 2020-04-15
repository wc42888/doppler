# Doppler simulator

Doppler simulator is designed for visualize the doppler effect to help the users to better understanding the concept.

## Discusion

The current mathod to implement color changes on the star PNG image is by changing the 'filter' property in css style. It is easy to implement but also poses issues:

- the blue/red color when the slider or velocity input reaches maximum (-100/100) is not the real blue (#0000FF) or red(#FF0000). One way to achieve the real blue/red color is to use SVG to load the image and use getImageData() / setImageData() methods to adjust the colors on each pixel. However, i feel this approach is a bit more compuational extensive for what the purpose of this simulator suppose to do.

- the method to convert between position of slider and the actual velocity value (getPosFromValue/getValueFromPos) is derived mathmatically by the user so it may not be understandable by looking at it.

## Things to be improved

- find more cleaver way to adject the color of the PNG image

- CI/CD pipleline

- automated end-to-end tests

## Tech Stack

- React [https://reactjs.org/](https://reactjs.org/)
- Jest [jest](https://jestjs.io/)

## Getting Started

### Prerequisites

- Node.js

In the project directory, first run

`yarn install` or `npm install`

and then you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Authors

- **Chao Wang**
