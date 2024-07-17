const express = require('express');

const router = express.Router();

// GET /courses
router.get('/', (req, res) => {
    // Logic to fetch all courses
    res.send('Get all courses');
});

// GET /courses/:id
router.get('/:id', (req, res) => {
    const courseId = req.params.id;
    console.log("this method is called with id",courseId)
    // Logic to fetch a specific course by ID
    res.send(`Get course with ID ${courseId}`);
});

// POST /courses
router.post('/', (req, res) => {
    // Logic to create a new course
    res.send('Create a new course with name');
});

// PUT /courses/:id
router.put('/:id', (req, res) => {
    const courseId = req.params.id;
    // Logic to update a specific course by ID
    res.send(`Update course with ID ${courseId}`);
});

// DELETE /courses/:id
router.delete('/:id', (req, res) => {
    const courseId = req.params.id;
    // Logic to delete a specific course by ID
    res.send(`Delete course with ID ${courseId}`);
});

module.exports = router;