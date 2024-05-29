const { Jewel } = require('../Models');
const mongoose = require('mongoose');



const getAllJewelry = async (req, res) => {
    try {
        const jewelry = await Jewel.find({})
        res.json(jewelry)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

const getJewelById = async (req, res) => {
    const { id } = req.params;
    try {
        const jewel = await Jewel.findById(id)
        if (!jewel) {
            return res.status(404).json({ message: 'Jewel not found' });
        }
        res.status(200).json(jewel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
    try {
        let { id } = req.params;
        let jewel = await Jewel.findByIdAndUpdate(id, req.body, { new: true })
        if (jewel) {
            return res.status(200).json(jewel)
        }
        throw new Error("Jewel not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createJewel = async (req, res) => {
    try {
        const newJewel = await new Jewel(req.body)
        await newJewel.save()
        return res.status(201).json({
            newJewel
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllJewelry,
    getJewelById,
    deleteJewel,
    updateJewel,
    createJewel
};