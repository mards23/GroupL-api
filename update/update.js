const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let exams = [
    { id: 1, name: "Math Exam", date: "2025-05-01" },
    { id: 2, name: "Science Exam", date: "2025-06-15" }
];

// Member 3: PUT /exams/:id (updates an exam by ID)
app.put("/exams/:id", (req, res) => {
    const examId = parseInt(req.params.id);
    const updatedExam = req.body;
    let exam = exams.find(e => e.id === examId);

    if (exam) {
        exam.name = updatedExam.name || exam.name;
        exam.date = updatedExam.date || exam.date;
        res.json(exam);
    } else {
        res.status(404).json({ message: "Exam not found" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
