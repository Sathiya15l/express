var userService = require('../service/userservice');
const getUsers = (req, res) => {
    const users = userService.getAllUsers;
    res.json(users);
  };
  module.exports={getUsers};