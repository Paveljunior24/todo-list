import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import { EditTodoForm } from './EditTodoForm';

/**
 * TodoWrapper component manages the state and logic for the to-do list application.
 *
 * @returns {JSX.Element} The TodoWrapper component.
 */
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  /**
   * Adds a new task to the to-do list.
   *
   * @param {string} todo - The task description.
   */
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  /**
   * Toggles the completion status of a task.
   *
   * @param {string} id - The unique identifier of the task.
   */
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  /**
   * Deletes a task from the to-do list.
   *
   * @param {string} id - The unique identifier of the task.
   */
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  /**
   * Toggles the editing status of a task.
   *
   * @param {string} id - The unique identifier of the task.
   */
  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  /**
   * Updates the task description.
   *
   * @param {string} task - The new task description.
   * @param {string} id - The unique identifier of the task.
   */
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
  };

  return (
    <div className='TodoWrapper'>
      <h1>DO It!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo 
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
    </div>
  );
};

export default TodoWrapper;
