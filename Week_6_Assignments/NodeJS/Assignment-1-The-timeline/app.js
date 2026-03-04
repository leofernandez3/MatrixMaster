const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const routes = require('./Config/routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});