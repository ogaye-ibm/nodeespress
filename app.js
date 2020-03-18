const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Atlanta!!!");
});
 
module.exports.app = app;
