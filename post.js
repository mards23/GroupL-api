const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let exams = [
    { id: 1, name: "Math Exam", date: "2025-05-01" },
    { id: 2, name: "Science Exam", date: "2025-06-15" }
];

// Member 2: POST /exams endpoint (adds a new exam)
app.post("/exams", (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1; // Assign a new ID
    exams.push(newExam);
    res.status(201).json(newExam);
});

app.listen(port, () => {
    console.log(Server running on http://localhost:${port});
});