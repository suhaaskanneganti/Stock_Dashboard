# Simple-Robinhood-Dashboard

Simple-Robinhood-Dashboard is a a clean and simple Robinhood-like web app that allows the user to view up to date information on a list of tickers.

## Setup

In order to successfully run this application, you need to make sure you have a couple things set-up beforehand.

You will need the following:
- [Joi](https://www.npmjs.com/package/joi) 
- [Express](https://www.npmjs.com/package/express)
- [Node](https://nodejs.org/en/download/)
- [React](https://reactjs.org/docs/getting-started.html)
- [styled-components](https://www.npmjs.com/package/styled-components)

You will also need to enable CORS (cross-origin resource sharing) in your browser of choice.

## Run the server-side code...

Start by changing your working directory to the location of the server-side code in '../simdaq-api'. Once in this folder, run the following command in your terminal:

```bash
  node .
```

If you want to play around with the code while its running, I reccomend using nodemon, which allows for automatic restarting of the server without having to create a new terminal. If using nodemon to run your server, run the following command in your terminal:

```bash
  nodemon .
```
## Run the React web-page

Now that the server is up and running, change your working directory to '../robinhood'. Once in this folder, run the following command in your terminal:

```bash
  npm start
```

## You're done!

Now, you should see the following! This is a stock dashboard that updates every second with some previously hard-coded data.

<img width="1781" alt="demo" src="https://github.com/suhaaskanneganti/Stock_Dashboard/assets/107927115/2be4b72f-3361-4c48-9580-12632a4de49d">

