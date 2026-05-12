import express from 'express';
import { getAllStrains } from '../controllers/strainController.js';

const router = express.Router();

router.get('/', getAllStrains);

router.post('/', addAStrain);

router.put('/:id', updateAStrain);

router.delete('/:id', (req, res) => { // DELETE
    res.status(200).json({ message: 'Strain deleted successfully!' });
});

export default router