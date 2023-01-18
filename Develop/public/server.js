const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'));
});

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);