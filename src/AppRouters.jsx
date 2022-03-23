import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Todo from "./pages/Todo";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}/>
        <Route path="todo" element={<Todo />}>
          <Route index element={<TodoList />} />
          <Route path=":todoDate" element={<TodoList />}/>
        </Route>
      </Route>
      <Route path="404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to='/404'/>} />
    </Routes>
  )
}