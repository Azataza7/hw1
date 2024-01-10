const express = require('express');
const app = express();
const port = 8000;

app.get('/:article', (req, res) => {
  res.send(`<h1>${req.params.article}</h1>`);
})

app.listen(port, () => {
  console.log('Server started at ' + port)
})

