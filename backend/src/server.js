import express from 'express';
import strainRoutes from './routes/strainRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use('/api/strains', strainRoutes);

connectDB();

app.listen(3000, () => {
    console.log('Server started on PORT: 3000');
});