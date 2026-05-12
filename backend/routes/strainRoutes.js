import express from 'express';

const router = express.Router()

router.get('/', (req, res) => { // READ
    res.status(200).send('Here are your current favorite strains!');
});

router.post('/', (req, res) => { // CREATE
    res.status(201).json({ message: 'Strain added successfully!' })
})

export default router

// app.put('/api/strains:id', (req, res) => { // UPDATE
//     res.status(200).json({ message: 'Strain updated successfully!' });
// });

// app.delete('/api/strains:id', (req, res) => { // DELETE
//     res.status(200).json({ message: 'Strain deleted successfully!' });
// });