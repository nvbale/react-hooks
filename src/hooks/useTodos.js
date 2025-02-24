import {useEffect, useReducer} from "react";
import {todoReducer} from "../08-useReducer/todoReducer.js";

function init() {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export function useTodos() {
  const [todos, dispatch] = useReducer(todoReducer, [], init)
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos || []))
  }, [todos]);
  
  function handleNewTodo(todo) {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    
    dispatch(action)
  }
  
  function handleRemoveTodo(id) {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id,
    }
    
    dispatch(action)
  }
  
  function handleToggleTodo(id) {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id,
    }
    
    dispatch(action)
  }
  
  return {
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }
  
}