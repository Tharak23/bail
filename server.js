const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Set up SQLite database
const db = new sqlite3.Database('prisoners.db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch prisoner details
app.get('/api/prisoners/:name', (req, res) => {
    const name = req.params.name;
    db.get('SELECT * FROM prisoners WHERE name = ?', [name], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row || {});
    });
});

// Endpoint to submit requests
app.post('/api/requests', (req, res) => {
    const { prisonerName, report } = req.body;
    // Simulate storing the request in a file or database
    console.log(`Request submitted for ${prisonerName}: ${report}`);
    res.status(200).json({ message: 'Request submitted successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
