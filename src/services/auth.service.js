import axios from 'axios';
const API_URL = 'https://laravel-todoapp.onrender.com/api';

const register = (name, email, password, password_confirmation) => {
  return axios.post(`${API_URL}/register`, { name, email, password, password_confirmation });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const AuthService = { register, login };
export default AuthService;