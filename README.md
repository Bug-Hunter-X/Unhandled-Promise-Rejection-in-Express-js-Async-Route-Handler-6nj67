# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Express.js applications involving unhandled promise rejections within asynchronous route handlers.  The `bug.js` file shows an example of an asynchronous operation that may throw an error but lacks proper error handling to prevent crashes or unexpected responses.

The solution (`bugSolution.js`) illustrates how to effectively use `.catch()` to handle potential errors and provide graceful responses to the client.

## How to reproduce the bug
1. Clone the repository.
2. Run `npm install express`
3. Run `node bug.js`
4. Refresh the page several times.  You'll eventually see the server crash due to an unhandled error.