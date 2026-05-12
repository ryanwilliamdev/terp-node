import express from 'express';
import { addAStrain, getAllStrains, updateAStrain, deleteAStrain } from '../controllers/strainController.js';

const router = express.Router();

router.get('/', getAllStrains);
router.post('/', addAStrain);
router.put('/:id', updateAStrain);
router.delete('/:id', deleteAStrain);

export default router;