const express = require('express')
const db = require('./db')
const movieControllers = require('./controllers/movieControllers')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.use(cors())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})


app.get('/', (req, res) => {
  res.send('This is our root page!')
})

app.get('/jewelry', jewelControllers.getAllJewelry)

app.get('/products', productControllers.getAllProducts)



//  sort by bestseller


// sort by date



// get info byID


// create

 
// update


// delete 