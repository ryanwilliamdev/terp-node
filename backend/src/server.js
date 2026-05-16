import express from 'express';
import strainRoutes from './routes/strainRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use('/api/strains', strainRoutes);

connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/strains', strainRoutes);

// ERROR HANDLING
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
});
app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});