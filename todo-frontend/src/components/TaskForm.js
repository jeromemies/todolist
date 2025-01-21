import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ onAdd }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate input
    if (!taskTitle || typeof taskTitle !== 'string' || taskTitle.trim() === '') {
      alert('Task title cannot be empty.');
      return;
    }
  
    setIsSubmitting(true);  // Disable the button while submitting
  
    try {
      // Call the parent addTask function and wait for it to complete
      await onAdd(taskTitle.trim());
  
      setTaskTitle('');  // Clear the input field after adding
      console.log("Task successfully added.");
  
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task. Please check your connection.');
    } finally {
      setIsSubmitting(false);  // Re-enable the button
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a task"
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
