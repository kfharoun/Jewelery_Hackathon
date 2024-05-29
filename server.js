const express = require('express')
const db = require('./DB')
const jewelryController = require('./Controllers/jewelryController')
const productController = require('./Controllers/productController')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('This is our root page!')
})


app.get('/jewelry', jewelryController.getAllJewelry)
app.get('/products', productController.getAllProducts)

// get infoByID
app.get('/jewelry/:id', jewelryController.getJewelById)
app.get('/products/:id', productController.getProductById)


//  fetch by price
curl -X GET "http://localhost:3001/products/sort?sortBy=priceAsc"
curl -X GET "http://localhost:3001/products/sort?sortBy=priceDesc"


// sort by new to old
app.get('/productsnew', productController.getNewProductsFirst)
app.get('/productsold', productController.getOldProductsFirst)


// create
app.post('/jewelry', jewelryController.createJewel)
app.post('/products', productController.createProduct)
 

// update
app.put('/jewelry', jewelryController.updateJewel)
app.put('/products', productController.updateProduct)


// delete 
app.delete('/jewelry', jewelryController.deleteJewel)
app.delete('/products', productController.deleteProduct)