import express from 'express';

const router = express.Router()

router.get('/', (req, res) => { // READ
    res.status(200).send('Here are your current favorite cannabis strains!');
});

router.post('/', (req, res) => { // CREATE
    res.status(201).json({ message: 'Strain added successfully!' })
})

router.put('/', (req, res) => { // UPDATE
    res.status(200).json({ message: 'Strain updated successfully!' });
});

router.delete('/', (req, res) => { // DELETE
    res.status(200).json({ message: 'Strain deleted successfully!' })
})

export default router



// app.delete('/api/strains:id', (req, res) => { // DELETE
//     res.status(200).json({ message: 'Strain deleted successfully!' });
// });