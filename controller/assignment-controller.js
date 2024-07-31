const { createAssignmentInDB, getAssignmentFromDb } = require("../service/assignment-service");

function createAssignment(req,res){
   const assignment=req.body;
   const newAssignment=createAssignmentInDB(assignment);
   res.status(201).json(newAssignment);
}
async function getAssignment(req,res){
   //const assignment=req.body;
   const newAssignment=await getAssignmentFromDb(req.db);
   res.status(201).json(newAssignment);
}

module.exports = {createAssignment,getAssignment};