import React, { useState } from 'react';

/**
 * TodoForm component provides a form to add a new task to the to-do list.
 *
 * @param {Object} props - The properties object.
 * @param {function} props.addTodo - The function to add a new task.
 *
 * @returns {JSX.Element} The TodoForm component.
 */
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  /**
   * Handles form submission.
   *
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder="What is the day's task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
