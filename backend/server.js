import express from 'express';

const app = express();

app.get('/api/strains', (req, res) => {
    res.status(200).send('Everything looks good!')
})

app.listen(3000, () => {
    console.log('Server started on PORT: 3000');
});