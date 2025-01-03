const express = require('express');
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Dice rolling endpoint
app.get('/roll-dices', (req, res) => {
    const diceValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    res.json({ diceValues });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
