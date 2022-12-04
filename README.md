<<<<<<< HEAD
# Overview
This is a web application that allows users to turn their ebooks into NFts on the polygon bock chain

its was built using remix for the solidity smart contract of which similat code is in the 
hardhat folder but not the one. React.js for the front end , firebase for some backend operations 
and recoil for state managment

# Details of smart contract

The asset is the ebook identified by a 6 bytes string (id), that have a certain number of stocks (quantity) that is willing to sell it at a certain price (price).

# Transaction details (These where not yet done in the front  ut are in the smart contract)

The idea is simple:

A transaction needs to be from source to target (the source buys from the target).
A buyer will buy a certain quantity of stocks.
A stock price is the same as the targets price.
The timestamp is the time of transaction execution or now/ block.timestamp.
The state can be:
Pending: when the transaction has been created.
Validated: when the transaction is valid, this means that the target quantity is credited and the transaction has been executed.
Rejected: in this case, the desired quantity is not available
Note: A partial transaction is split on 2 (Completed and Rejected)

Example: Let's say I have 2 assets ("MARK", 1,5) and ("MIRIAM", 1, 7)

I have this transaction coming from MARK to MIRIAM ("MARK", "MIRIAM", 8).

I know that MARK can buy only 4 from MIRIAM, because it has only 7 available stocks.

So the resulting transactions will be 2 assuming there is n previous transactions executed by the system.

Transaction n+1: A validated transaction ("MARK", "MIRIAM", 7, 1, timestamp_of_tn+1, 1)
Transaction n+2: A rejected transaction ("MARK", "MIRIAM", 1, 1, timestamp_of_tn+2, 0)

=======
>>>>>>> 4d55d6762d2c0f109ed2d504e740880623633d53
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<<<<<<< HEAD
"# bookstoreblock" 
=======
>>>>>>> 4d55d6762d2c0f109ed2d504e740880623633d53
