const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Alpharetta, GA!!!");
});
 
module.exports.app = app;
