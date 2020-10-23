const express = require('express')
const app = express()
const hostname = 'localhost'
const port = 3000

//Importing routes
import routes from './routes/helloworld'

//middleware
app.use(express.static('public'));

//routes
app.use('/simplewebapp',routes);


app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
