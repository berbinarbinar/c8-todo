import { useState } from "react";
import { Outlet } from "react-router-dom";
import TodoCategory from "../components/TodoCategory";
import TodoForm from "../components/TodoForm";
import { getTodos } from "../data"

export default function Todo() {
  const [todos, setTodos] = useState(getTodos());

  return (
    <div id="todo-wrap">
      <TodoForm context={[todos, setTodos]}/>
      <div id="todo">
        <TodoCategory context={[todos]}/>
        <Outlet context={[todos, setTodos]}/>
      </div>
    </div>
  )
}