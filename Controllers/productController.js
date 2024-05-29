const { Product } = require('../Models');
const mongoose = require('mongoose');


const getAllProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductsByPrice = async (req, res) => {
    try {
        const sortedProducts = await Product.find({}).sort({ price: -1 })

        res.json(sortedProducts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getInfoById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).populate('name').populate('shortDesc').populate('image');
        if (!product) {
            return res.status(404).json({ message: 'Jewelry not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const product = await Product.findByIdAndUpdate(id, updateData, { new: true }).populate('name').populate('shortDesc').populate('jewelryId');
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProduct = async (req, res) => {
    const { name, price, inStock, description, bestSeller, image, jewelryId } = req.body;
    try {
        const newProduct = new Product({ name, price, inStock, description, bestSeller, image, shortDesc, jewelryId });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getInfoById,
    deleteProduct,
    updateProduct,
    createProduct
};