import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";
import {useTodos} from "../hooks";

export const TodoApp = () => {
  const {
    todos, todosCount, pendingTodosCount, handleNewTodo,
    handleToggleTodo, handleRemoveTodo
  } = useTodos()
  
  return (
    <>
      <h1>TodoApp {todosCount}, <small>pending: {pendingTodosCount}</small></h1>
      <hr/>
      
      <div className={"row"}>
        <div className={"col-7"}>
          <TodoList todos={todos} onRemoveTodo={handleRemoveTodo}
                    onToggleTodo={handleToggleTodo}/>
        </div>
        
        <div className={"col-5"}>
          <h4>Add TODO</h4>
          <hr/>
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  )
}
