const express = require('express')
const app = express()
const hostname = 'localhost'
const port = 3002

const router=express.Router()

app.use('/simple_webapp',express.static('public'));

//middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

//set route
router.get('/simple_webapp', function(req, res) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
