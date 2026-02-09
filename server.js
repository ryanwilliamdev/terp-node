const express = require('express')
const app = express()
const PORT = 8000

const terpeneData = {
    'unknown': {
    id: 0,
    'aroma': 'unknown',
    'effects': 'unknown',
    },
    'myrcene': {
        id: 1,
        'aroma': 'Earthy, Musky, Cloves',
        'effects': ['Relaxing', 'Sedating'],
    },
    'limonene': {
        id: 2,
        'aroma': 'Citrus, Lemon, Orange',
        'effects': ['Mood Elevation', 'Stress Relief'],
    },
    'caryophyllene': {
        id: 3,
        'aroma': 'Peppery, Spicy, Wood',
        'effects': ['Anti-inflammatory', 'Anxiety Relief'],
    },
    'linalool': {
        id: 4,
        'aroma': 'Floral, Lavender',
        'effects': ['Calming', 'Sleep Aid'],
    },
    'pinene': {
        id: 5,
        'aroma': 'Pine, Sharp, Sweet',
        'effects': ['Alertness', 'Memory Retention'],
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const terpeneName = request.params.name.toLowerCase()
    if (terpeneData[terpeneName]) {
        response.json(terpeneData[terpeneName])
    } else {
        response.json(terpeneData['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port: ${PORT}.`)
})