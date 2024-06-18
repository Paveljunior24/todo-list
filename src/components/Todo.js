import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditTodoForm } from './EditTodoForm';

/**
 * Todo component represents a single task in the to-do list.
 * It displays the task and provides options to complete, edit, or delete the task.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.task - The task object containing task details.
 * @param {string} props.task.id - The unique identifier for the task.
 * @param {string} props.task.task - The description of the task.
 * @param {boolean} props.task.completed - The completion status of the task.
 * @param {function} props.toggleComplete - The function to toggle the completion status of the task.
 * @param {function} props.deleteTodo - The function to delete the task.
 * @param {function} props.editTodo - The function to edit the task.
 *
 * @returns {JSX.Element} The Todo component.
 */
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p 
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div className='Todo-actions'>
        <FontAwesomeIcon 
          icon={faPenToSquare} 
          onClick={() => editTodo(task.id)}
          className='Todo-action-icon'
        />
        <FontAwesomeIcon 
          icon={faTrash} 
          onClick={() => deleteTodo(task.id)}
          className='Todo-action-icon'
        />
      </div>
    </div>
  );
};

export default Todo;
