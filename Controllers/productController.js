const { Product } = require('../Models');
const mongoose = require('mongoose');



const getAllJewelry = async (req, res) => {
    try {
        const jewelry = await jewl.find();
        res.status(200).json(jewelry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

const getAllProducts = async (req, res) => {
    const { sortBy } = req.query;
    let sortCriteria = {};

    if (sortBy && (sortBy === 'priceAsc' || sortBy === 'priceDesc')) {
        sortCriteria = sortBy === 'priceAsc' ? { price: 1 } : { price: -1 };
    }

    try {
        const products = await Product.find()
            .populate('name')
            .populate('description')
            .populate('image')
            .sort(sortCriteria);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getInfoById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).populate('name').populate('description').populate('image');
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
        const product = await Product.findByIdAndUpdate(id, updateData, { new: true }).populate('name').populate('jewelryId');
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
        const newProduct = new Product({ name, price, inStock, description, bestSeller, image, jewelryId });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllJewelry,
    getAllProducts,
    getInfoById,
    deleteProduct,
    updateProduct,
    createProduct
};