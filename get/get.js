const express = require('express');
const app = express();
const port = 3000;

// Hardcoded list of exams
const exams = [
    { id: 1, subject: "Math", date: "2025-04-10" },
    { id: 2, subject: "Science", date: "2025-04-15" },
    { id: 3, subject: "History", date: "2025-04-20" }
];

// GET /exams endpoint
app.get('/exams', (req, res) => {
    res.json(exams);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
