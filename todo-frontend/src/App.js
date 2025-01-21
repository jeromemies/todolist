import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';

const API_URL = 'http://127.0.0.1:8000/tasks/';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from FastAPI backend
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  // Function to add a task via FastAPI
  const addTask = async (title) => {
    try {
      const response = await axios.post(API_URL, { title: title.trim() });

      const newTask = response.data;

      if (newTask && typeof newTask.title === 'string') {
        setTasks((prevTasks) => [...prevTasks, newTask]);  // Add task correctly
        console.log("Task added successfully:", newTask);
      } else {
        console.error('Invalid task object received:', newTask);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to delete a task via FastAPI
  const deleteTask = (taskId) => {
    axios.delete(`${API_URL}${taskId}/`)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          alert('Task not found. It may have already been deleted.');
        } else {
          console.error('Error deleting task:', error);
        }
      });
  };

  // Function to handle drag and drop reordering of tasks
  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <h1>To-Do List</h1>

          <TaskForm onAdd={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} moveTask={moveTask} />
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
