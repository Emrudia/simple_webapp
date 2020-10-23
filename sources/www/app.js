const express = require('express')
const app = express()
const hostname = 'localhost'
const port = 3000

//middleware
app.use(express.static('public'));

//routes
app.use('/route',routes);



app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
