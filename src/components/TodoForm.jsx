import { useNavigate } from "react-router-dom";
import Input from "./Input";

export default function TodoForm({ context }) {
  const [todos, setTodos] = context;
  const navigate = useNavigate();

  function createTodo(title, date, time) {
    if (!title || !date || !time) return null;
    date = new Date(date);
    const todo = {
      id: Date.now(),
      title,
      date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      time,
      complete: false
    }
    return todo
  }

  function handleSubmit(e) {
    e.preventDefault();
    const todo = createTodo(e.target.title.value, e.target.date.value, e.target.time.value);
    if (todo === null) return;
    setTodos([...todos, todo]);
    navigate(`./${todo.date}`, {replace: true});
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" label="Title" name="title" />
      <Input type="date" label="Date" name="date" />
      <Input type="time" label="Time" name="time" />
      <button type="submit">Create Todo</button>
    </form>
  )
}