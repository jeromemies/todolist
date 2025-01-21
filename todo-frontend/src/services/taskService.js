import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks';

export const fetchTasks = async () => {
    return axios.get(API_URL);
};

export const addTask = async (task) => {
    return axios.post(API_URL, { title: task, completed: false });
};

export const deleteTask = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
