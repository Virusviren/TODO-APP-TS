import React, { useState } from 'react';
import { Todo } from './models';

interface IPROPS {
  todoItem: Todo;
  deleteItem: (id: string) => void;
}

const TodoItem = ({ todoItem: { name, date, id }, deleteItem }: IPROPS) => {
  const [completed, setCompleted] = useState(false);
  return (
    <span className='todo'>
      <span className={completed ? 'message-done' : 'message'}>{name}</span>
      <span>
        <span className='date'>{date}</span>
        <button
          type='button'
          onClick={() => {
            setCompleted(true);
          }}
        >
          Done
        </button>
        <button type='button' onClick={() => deleteItem(id)}>
          Remove
        </button>
      </span>
    </span>
  );
};

export default TodoItem;
