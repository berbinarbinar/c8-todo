import { NavLink } from "react-router-dom";

export default function TodoCategory({ context }) {
  const [todos] = context;

  function getDay(date) {
    date = date.split('-');
    date = new Date(date[2], (date[1] - 1), date[0]).getTime();
    const now = new Date().setHours(0, 0, 0, 0);
    const day = 24 * 60 * 60 * 1000;
    const sisa = (now - date) / day
    if (date - now === 0) return 'Today';
    if (date > now && sisa < 0) return `D${sisa}`;
    if (date < now && sisa > 0) return `${sisa} day ago`
  }

  return (
    <div id="todo-category">
      <h3>Date</h3>
      { 
        todos
          .sort((a, b) => (a.date > b.date) ? 1 : (b.date > a.date) ? -1 : 0)
          .filter((todo, i) => {
            const dates = todos.map(todo => todo.date);
            return dates.indexOf(todo.date) === i
          })
          .map(({date}, idx) => (
            <NavLink 
              to={`/todo/${date}`} 
              key={idx}
            >
              <h4>{getDay(date)}</h4>
              <h6>{date}</h6>
            </NavLink>
          ))
      }
    </div>
  )
}