const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      //Improved Error handling
      console.error('Error:', err);
      res.status(500).send('Something went wrong!');
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
}