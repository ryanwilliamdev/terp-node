import express from 'express';

const app = express();

app.get('/api/strains', (req, res) => {
    res.send('you got 5 notes')
})

app.listen(3000, () => {
    console.log('Server started on PORT: 3000');
});