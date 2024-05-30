const { Product } = require('../Models');
const mongoose = require('mongoose');


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductsByPriceDown = async (req, res) => {
    try {
        const sortedProducts = await Product.find({}).sort({ price: -1 })

        res.json(sortedProducts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getProductsByPriceUp = async (req, res) => {
    try {
        const sortBy = await Product.find({}).sort({ price: 1 })

        res.json(sortBy)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getBestSellerProducts = async (req, res) => {
    try {
        const bestSellerProducts = await Product.find({ bestSeller: true })
        res.status(200).json(bestSellerProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getInfoById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).populate('name').populate('shortDesc').populate('image');
        if (!product) {
            return res.status(404).json({ message: 'Jewelry not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (product) {
            return res.status(200).send({ message: 'Product deleted' });
        }
        throw new Error("Product not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (product) {
            return res.status(200).json(product)
        }
        throw new Error("Product not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = await new Product(req.body)
        await newProduct.save()
        return res.status(201).json({
            newProduct
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllProducts,
    getProductsByPriceDown,
    getProductsByPriceUp,
    getBestSellerProducts,
    getInfoById,
    deleteProduct,
    updateProduct,
    createProduct
};