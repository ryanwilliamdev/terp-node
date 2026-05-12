import express from 'express';
import strainRoutes from './routes/strainRoutes.js';

const app = express();

app.use('/api/strains', strainRoutes);



app.listen(3000, () => {
    console.log('Server started on PORT: 3000');
});