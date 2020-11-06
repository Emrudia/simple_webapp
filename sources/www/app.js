const express = require('express')
const app = express()
const hostname = 'localhost'
const port = 3002


app.use(express.static('public'));


//set route
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
