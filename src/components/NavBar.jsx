import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  function isActive(e) {
    return e.isActive ? 'active' : undefined
  }
  return (
    <section>
      <nav>
        <h1>APP TODOS</h1>
        <NavLink to="/" className={isActive}>Home</NavLink>
        <NavLink to="/todo" className={isActive}>Todo</NavLink>
      </nav>
      <Outlet />
    </section>
  )
}