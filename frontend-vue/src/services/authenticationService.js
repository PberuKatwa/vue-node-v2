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
  }
}