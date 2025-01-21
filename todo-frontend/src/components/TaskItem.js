import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ITEM_TYPE = 'TASK';

function TaskItem({ task, index, moveTask, onDelete }) {
  const ref = React.useRef(null);

  // Dragging functionality
  const [, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
  });

  // Dropping functionality
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <li
      ref={ref}
      style={{
        padding: '12px 16px',
        margin: '8px 0',
        backgroundColor: '#f4f4f4',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: 'move',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {task.title}
      <button
        style={{ background: 'red', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
