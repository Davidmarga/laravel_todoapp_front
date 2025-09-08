import axios from 'axios';
const API_URL = 'https://laravel-todoapp.onrender.com/api';

const getTasks = (token) => axios.get(`${API_URL}/tasks`, {
  headers: { Authorization: `Bearer ${token}` }
});

const createTask = (token, task) => axios.post(`${API_URL}/tasks`, task, {
  headers: { Authorization: `Bearer ${token}` }
});

export default { getTasks, createTask };