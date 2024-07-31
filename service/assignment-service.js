const {userInsert,userDisplay} = require("../utils/dbconnection");

async function createAssignmentInDB(assignment){
    //var assign = create(assignment);
    //return assign;
    //return assignment.create(assignment1);
    var insertedValue=await userInsert(assignment);
    return insertedValue;
    //return "Welcome Back";
}

async function getAssignmentFromDb(){
    //var assign = create(assignment);
    //return assign;
    //return assignment.create(assignment1);
    var insertedValue=await userDisplay();
    return insertedValue;
    //return "Welcome Back";
}
module.exports = {createAssignmentInDB,getAssignmentFromDb};