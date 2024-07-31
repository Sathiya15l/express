const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Get all courses');
});
router.get('/:id',(req,res)=>{
    const courseId = req.params.id;
    console.log("This method is called with Id",courseId);
    res.send(`Get courses with ID ${courseId}`);
});
router.post('/',(req,res)=>{
    res.send('Create new course with name');
});
router.put('/:id',(req,res)=>{
    const courseId = req.params.id;
    
    res.send(`Update courses with ID ${courseId}`);
});
router.delete('/:id',(req,res)=>{
    const courseId = req.params.id;
    
    res.send(`Delete courses with ID ${courseId}`);
});

module.exports = router;