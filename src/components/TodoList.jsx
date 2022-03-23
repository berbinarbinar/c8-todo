import { Navigate, useOutletContext, useParams } from "react-router-dom"
import { getDateNow } from "../data";

export default function TodoList() {
  const [todos, setTodos] = useOutletContext();
  const params = useParams();
  const todosByDate = getTodosByDate(todos, params.todoDate);

  function getTodosByDate(todos, date) {
    return todos.filter(todo => todo.date === date)
  }

  function handleComplete(id) {
    const change = todos.map(todo => {
      return id === todo.id ? {...todo, complete: !todo.complete} : {...todo}
    })
    setTodos(change);
  }

  function deleteTodo(id) {
    const deleted = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(deleted)
  }

  return (
    <div id="list-wrap">
      <h3>Todo List</h3>
      {
        !params.todoDate ? <Navigate to={`/todo/${getDateNow()}`}/>
        : todosByDate.length === 0 ? <p>pada {params.todoDate} tidak ada todo</p>
        : <ul id="todo-list">
            {
              todosByDate.map((todo, idx) => (
                <li 
                  key={idx} 
                  className={todo.complete ? 'complete' : ''}
                >
                  <input 
                    type="checkbox" 
                    checked={todo.complete} 
                    onChange={() => handleComplete(todo.id)}
                  />
                  <div>
                    <h4>{todo.title}</h4>
                    <h6>{todo.time}</h6>
                  </div>
                  <button onClick={() => {deleteTodo(todo.id)}}>X</button>
                </li>
              ))
            }
          </ul>   
      }
    </div>
  
  )
}