const { User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  },

    /*
  async createUser(req, res) {
    try {
      const { userName, userPassword } = req.body;
      const newUser = await User.create({ userName, userPassword });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(400).json({ error: 'Error creating user', details: error.message });
    }
  }
    */


  async createUser(req, res) {
    try {
      console.log('Received data:', req.body);
      const { userName, userPassword } = req.body;
      console.log('Extracted data:', { userName, userPassword });
  
      if (!userName || !userPassword) {
        return res.status(400).json({ error: 'userName and userPassword are required' });
      }
  
      const newUser = await User.create({ userName, userPassword });
      console.log('Created user:', newUser.toJSON());
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(400).json({ error: 'Error creating user', details: error.message });
    }
  }


};

