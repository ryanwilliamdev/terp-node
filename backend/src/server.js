import express from 'express';
import strainRoutes from './routes/strainRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use('/api/strains', strainRoutes);

connectDB();

app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});