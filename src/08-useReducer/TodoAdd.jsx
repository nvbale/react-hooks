import {useForm} from "../hooks/index.js";

export const TodoAdd = ({onNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({description: ''})
  
  function onSubmit(event) {
    event.preventDefault()
    const value = description.trim()
    
    if (value.length <= 1) return
    
    onNewTodo({
      id: new Date().getTime(),
      description: value,
      done: false,
    })
    onResetForm()
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type={"text"}
             placeholder={"What to do?"}
             className={"form-control"}
             value={description}
             onChange={onInputChange}
             name={"description"}
      />
      <button type={"submit"}
              className={"btn btn-primary mt-2"}
      >Add
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onNewTodo: () => {
  },
}