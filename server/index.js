const express = require('express');
const app = express();
const port = 3003;


app.get('/', (req, res) => {
    res.send('Hello, world, welcome to Express app!');
  });
 
 app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });
 