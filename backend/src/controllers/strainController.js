import { Strain } from '../models/Strain.js'; // GET ALL STRAINS


export const getAllStrains = async (req, res) => { // READ
    try {
        const strains = await Strain.find();
        res.status(200).json(strains);
    } catch (error) {
        console.error('Error fetching strains from getAllStrains controller:', error);
        res.status(500).json({ message: error.message });
    }
};


export const addStrain = async (req, res) => { // CREATE
    try {
        const { name, type, cultivator, terpenes, flavor } = req.body;
        const strain = await Strain.create({ name, type, cultivator, terpenes, flavor });
        res.status(201).json(strain);
    } catch (error) {
        console.error('Error adding strain from addStrain controller:', error);
        res.status(500).json({ message: error.message });
    }
};

export const updateStrain = async (req, res) => { // UPDATE
    await res.status(200).json({ message: 'Strain updated successfully!' });
};

export const deleteStrain = async (req, res) => { // DELETE
    await res.status(200).json({ message: 'Strain deleted successfully!' });
};