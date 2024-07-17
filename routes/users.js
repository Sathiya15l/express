var express = require('express');
var router = express.Router();
// CREATE user
router.post('/', function(req, res, next) {
  // Logic to create a new user
  // Assuming req.body contains the user data
  var newUser = req.body;
  // Save the new user to the database or any other storage
  // ...
  // Return the newly created user as response
  res.json(newUser);
});

// UPDATE user
router.put('/:id', function(req, res, next) {
  // Logic to update an existing user
  // Assuming req.params.id contains the user ID to be updated
  // Assuming req.body contains the updated user data
  var updatedUser = req.body;
  // Update the user in the database or any other storage
  // ...
  // Return the updated user as response
  console.log(updatedUser)
  res.json(updatedUser);
});

// DELETE user
router.delete('/:id', function(req, res, next) {
  // Logic to delete an existing user
  // Assuming req.params.id contains the user ID to be deleted
  // Delete the user from the database or any other storage
  // ...
  // Return a success message as response
  console.log("user deleted successfully")
  res.json({ message: 'User deleted successfully' });
});

// READ user
router.get('/:id', function(req, res, next) {
  // Logic to retrieve an existing user
  // Assuming req.params.id contains the user ID to be retrieved
  // Retrieve the user from the database or any other storage
  // ...
  // Return the retrieved user as response
  var user = {
    id: req.params.id,
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  res.json(user);
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource in userrrrrrrrrrrrrrrrs');
});

router.get('/getusers', function(req, res, next) {
  res.send('getMethod is called');
});

module.exports = router;
