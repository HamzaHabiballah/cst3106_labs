const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL connection pool
const pool = mysql.createPool({
    host: '127.0.0.1', // MySQL server address
    user: 'root', // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'emergency_waitlist', // The name of your database
    connectionLimit: 10
});

// Endpoint to list all patients
app.get('/patients', (req, res) => {
    pool.query('SELECT * FROM PATIENTS', (error, results) => {
        if (error) {
            console.error('Database error:', error);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/patients`);
});
