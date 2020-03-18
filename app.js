const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Atlanta, GA!!!");
});
 
module.exports.app = app;
