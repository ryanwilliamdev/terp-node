export const getAllStrains = async (req, res) => { // READ
    await res.status(200).send('Here are your current favorite cannabis strains!');
};

export const addStrain = async (req, res) => { // CREATE
    await res.status(201).json({ message: 'Strain added successfully!' });
};

export const updateStrain = async (req, res) => { // UPDATE
    await res.status(200).json({ message: 'Strain updated successfully!' });
};

export const deleteStrain = async (req, res) => { // DELETE
    await res.status(200).json({ message: 'Strain deleted successfully!' });
};