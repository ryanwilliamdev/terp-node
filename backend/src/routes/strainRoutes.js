import express from "express";
import {
    addStrain,
    getAllStrains,
    getStrainById,
    updateStrain,
    deleteStrain,
} from "../controllers/strainController.js";

const router = express.Router();

router.get("/", getAllStrains);
router.get("/:id", getStrainById);
router.post("/", addStrain);
router.put("/:id", updateStrain);
router.delete("/:id", deleteStrain);

export default router;
