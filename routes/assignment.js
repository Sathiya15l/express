const express=require('express');
const { createAssignment, getAssignment } = require('../controller/assignment-controller');
const router=express.Router();
router.get('/getAssignment',getAssignment);
router.post('/createAssignment',createAssignment);
module.exports = router;
