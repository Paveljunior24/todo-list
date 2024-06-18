import React, { useState } from 'react';

/**
 * EditTodoForm component provides a form to edit an existing task.
 *
 * @param {Object} props - The properties object.
 * @param {function} props.editTodo - The function to edit the task.
 * @param {Object} props.task - The task object containing task details.
 * @param {string} props.task.id - The unique identifier for the task.
 * @param {string} props.task.task - The description of the task.
 *
 * @returns {JSX.Element} The EditTodoForm component.
 */
export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  /**
   * Handles form submission.
   *
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type="text"
        className='todo-input'
        value={value}
        placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
