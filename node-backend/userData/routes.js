const express = require('express');
const router = express.Router();
const userDataController = require('./controller/userDataController');

router.post('/users',userDataController.createUser);
router.get('/users', userDataController.getAllUsers);
router.get('/users/:id',userDataController.getUserId);
router.post('/users/:id',userDataController.updateUser);
router.delete('/users/:id',userDataController.deleteUser);







router.get('/first', (req, res) => {
  res.send({
    message: "This is my express app"
  });
});

router.post('/register', (req, res) => {
  res.send({
    message: `This is the name ${req.body.name}, and password ${req.body.password}`
  });
});

module.exports = router;