# Holiday NFT UI App

# What is this?

The Happy Holidays Digital greeting card is a fun React and CSS animation that allows you Mint your very own NFT gift, change the time of day and check out a relaxing Happy Holidays Spotify Playlist!

# Architecture

![Architecture Diagram](https://www.jeremymack.com/appDiagram.png)

## Frontend

### ReactJS

The front-end handles all of the UI interactions, animations and delight. It also orchestrates calls to initialize the MetaMask wallet integration and pull a random NFT Gift (image) from S3 and initiate the minting process by calling the AWS Lambda.

### MetaMask Lambda

The ReactJS app checks for a MetaMask wallet address via the "ethereum" method accessible from the global window object (window.ethereum) thanks to the MetaMask plugin (when it's installed).

---

## Backend

### AWS: Amplify Amplify

The ReactJS app is automatically deployed and served via AWS Amplify. Any changes to the app are deployed upon a successful code merge via the Holiday NFT UI GitHub Repo.

### AWS: Certificate Manager & Route 53Certificate ManagerRoute 53

TLS Certificates, DNS resolution and routing are all handled via AWS' Route 53 Service

### AWS: Cloudfront Cloudfront

All requests are pushed through the AWS Cloudfront CDN to assist with speedy response times!

### AWS: API Gateway & Lambda API Gateway +Lambda

The dedicated API used for the Holiday NFT app is delivered by way of a serverless function (AWS Lambda) which is exposed and controlled through the AWS API Gateway. All calls to mint and issue NFTs by way of the NFT Port API flow through this gateway and Lambda config. Once the wallet ID is confirmed valid, the digital asset (the cute image) is moved from a temporary S3 home to a permanent S3 home. Once that process is complete, the NFT is minted and delivered to the Wallet Address the user provided by way of linking MetaMask.

### AWS: S3 & DynamoDB S3 +DynamoDB

All digital assetts are stored in S3 for safekeeping. There's a bucket of a finite number of images in available. Once they're gone, no more NFT's can be created. (That, and my free NFTPort trial will have been maxed out)

### NFT Port NFTPort

The service that handles accepting the Wallet ID, digital asset address and description, and ultimately mints the NFT and returns the transaction ID to the Lambda (which in turn returns the success response and transaction ID to the UI for display)

### Polygon (MATIC) ChainPolygon

All NFT's generated through this app

# How to run the UI

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
