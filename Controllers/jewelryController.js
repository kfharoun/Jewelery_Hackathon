const { Jewelry } = require('../Models');
const mongoose = require('mongoose');


// const getAllJewelry = async (req, res) => {
// };

// const getInfoById = async (req, res) => {
// };

const deleteJewel = async (req, res) => {
    const { id } = req.params;
    try {
        const jewel = await Jewel.findByIdAndDelete(id);
        if (!jewel) {
            return res.status(404).json({ message: 'Jewel not found' });
        }
        res.status(200).json({ message: 'Jewel successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateJewel = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const jewel = await Product.findByIdAndUpdate(id, updateData, { new: true }).populate('jewelryType').populate('metalType');
        if (!jewel) {
            return res.status(404).json({ message: 'Jewel not found' });
        }
        res.status(200).json(jewel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createJewel = async (req, res) => {
    const { jewelryType, metalType } = req.body;
    try {
        const newJewel = new Jewel({ jewelryType, metalType });
        await newJewel.save();
        res.status(201).json(newJewel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    // getAllJewelry,
    // getInfoById,
    deleteJewel,
    updateJewel,
    createJewel
};