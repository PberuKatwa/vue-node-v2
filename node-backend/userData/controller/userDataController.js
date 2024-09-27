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
  },

  async getUserId( req, res){
    try{
     const user = await User.findByPk(req.params.id);
     if(user){
        res.json(user)
     }else{
      res.status(404).json({ error: 'User not found' });
     } 
    }catch{
       console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Error fetching user', details: error.message });
    }
  },

  async updateUser(req, res){
    try{
      const { userName, userPassword } = req.body;
      console.log('Received data:', req.body);
      const [updated] = await User.update(
        { userName, userPassword},
        { where: {id:req.params.id} }
      );
      if (updated){
        const updatedUser = await User.findByPk(req.params.id);
        res.json(updatedUser);
      } else{
        res.status(404).json({ error: 'User not found' });
      }
             
    }catch(error){
      console.error('Error updating user:', error);
      res.status(400).json({ error: 'Error updating user', details: error.message });
    }
  },

  async deleteUser( req,res ){
    try{
      const deleted = await User.destroy({
        where:{id:req.params.id} 
      });
      if (deleted){
        res.status(204).send();
      } else{
        res.status(404).json({ error: 'User not found' });
      }
    }catch(error){
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Error deleting user', details: error.message });
    }
  }


};

