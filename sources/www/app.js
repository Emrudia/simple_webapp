const express = require('express')
const app = express()
const hostname = 'localhost'
const port = 3000

app.use(express.static('public'));

app.get('/simple_webapp', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
