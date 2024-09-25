import api from "./api";

export default {
  register(credentials) {
    console.log('Authentication service: Sending registration request', credentials);
    return api().post('register', credentials)
      .then(response => {
        console.log('Authentication service: Received response', response);
        return response;
      })
      .catch(error => {
        console.error('Authentication service: Error', error);
        if (error.response) {
          console.error('Error data:', error.response.data);
          console.error('Error status:', error.response.status);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        throw error;
      });
  }
}