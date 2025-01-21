import React from 'react';
import TaskItem from './TaskItem';
import { useDrop } from 'react-dnd';

const ITEM_TYPE = 'TASK';

function TaskList({ tasks, onDelete, moveTask }) {
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
  });

  return (
    <ul ref={drop} style={{ padding: 0, listStyle: 'none' }}>
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} index={index} moveTask={moveTask} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
