// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, null, {
    params: { username, password },
  });
  if (response.data) {
    localStorage.setItem('token', response.data);
  }
  return response.data;
};

const AuthService = {
  login,
};

export default AuthService;
