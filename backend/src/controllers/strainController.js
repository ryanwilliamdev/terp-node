import { Strain, StrainNote } from "../models/Strain.js"; // GET ALL STRAINS

export const getAllStrains = async (_, res) => {
    // READ
    try {
        const strains = await Strain.find().sort({ createdAt: -1 });
        res.status(200).json(strains);
    } catch (error) {
        console.error(
            "Error fetching strains from getAllStrains controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};

export const getStrainById = async (req, res) => {
    // READ
    try {
        const { id } = req.params;
        const strain = await Strain.findById(id);
        if (!strain) {
            return res.status(404).json({ message: "Strain not found!" });
        }
        res.status(200).json(strain);
    } catch (error) {
        console.error(
            "Error fetching strain by id from getStrainById controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};
export const getAllStrainNotes = async (req, res) => {
    // READ
    try {
        const strainNotes = await StrainNote.find();
        res.status(200).json(strainNotes);
    } catch (error) {
        console.error(
            "Error fetching strain notes from getAllStrainNotes controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};

export const addStrain = async (req, res) => {
    // CREATE
    try {
        const { name, type, cultivator, terpenes, description } = req.body;
        const strain = await Strain.create({
            name,
            type,
            cultivator,
            terpenes,
            description,
        });
        res.status(201).json(strain);
    } catch (error) {
        console.error("Error adding strain from addStrain controller:", error);
        res.status(500).json({ message: error.message });
    }
};

export const addStrainNote = async (req, res) => {
    // CREATE
    try {
        const { strain, note } = req.body;
        const strainNote = await StrainNote.create({ strain, note });
        res.status(201).json(strainNote);
    } catch (error) {
        console.error(
            "Error adding strain note from addStrainNote controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};

export const updateStrain = async (req, res) => {
    // UPDATE
    try {
        const { id } = req.params;
        const { name, type, cultivator, terpenes, description } = req.body;
        const strain = await Strain.findByIdAndUpdate(
            id,
            { name, type, cultivator, terpenes, description },
            { new: true },
        );
        if (!strain) {
            return res.status(404).json({ message: "Strain not found!" });
        }
        res.status(200).json(strain);
    } catch (error) {
        console.error(
            "Error updating strain from updateStrain controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};

export const updateStrainNote = async (req, res) => {
    // UPDATE
    try {
        const { id } = req.params;
        const { note } = req.body;
        const strainNote = await StrainNote.findByIdAndUpdate(
            id,
            { note },
            { new: true },
        );
        if (!strainNote) {
            return res.status(404).json({ message: "Strain note not found!" });
        }
        res.status(200).json(strainNote);
    } catch (error) {
        console.error(
            "Error updating strain note from updateStrainNote controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};

export const deleteStrain = async (req, res) => {
    // DELETE
    try {
        const { id } = req.params;
        await Strain.findByIdAndDelete(id);
        res.status(200).json({ message: "Strain deleted successfully!" });
    } catch (error) {
        console.error(
            "Error deleting strain from deleteStrain controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};

export const deleteStrainNote = async (req, res) => {
    // DELETE
    try {
        const { id } = req.params;
        await StrainNote.findByIdAndDelete(id);
        res.status(200).json({ message: "Strain note deleted successfully!" });
    } catch (error) {
        console.error(
            "Error deleting strain note from deleteStrainNote controller:",
            error,
        );
        res.status(500).json({ message: error.message });
    }
};
