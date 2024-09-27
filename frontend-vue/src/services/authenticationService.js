import api from "./api";

export default {
  register(credentials) {
    return api().post('register', credentials)
  },
  addUser(userData){
    return api().post('users', userData)
  },
  getUser(){
    return api().get('users')
  }, 
  deleteUser(userId){
    console.log('Authentication service: Sending registration request', userId);
    return api().delete(`users/${userId}`)
  },
  getUserById(userID){
    return api().get(`users/${userID}`)
  },
  editUserDetails(userId, userData){
    return api().post(`users/${userId}`, userData)
  }
}