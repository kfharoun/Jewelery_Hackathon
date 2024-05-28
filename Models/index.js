const mongoose =  require('mongoose');
const ProductSchema = require('./product');
const JewelSchema = require('./jewel');

const Product = mongoose.model('Product', ProductSchema);
const Jewel = mongoose.model('Jewel', JewelSchema);

module.exports = {
    Product, 
    Jewel
    
}