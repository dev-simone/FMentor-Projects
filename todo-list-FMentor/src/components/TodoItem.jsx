import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";

const TodoItem = ({ id, completed, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="todo-list__checkbox-label">
        <div>
          <img src={iconCheck} alt="" />
        </div>
        <span>{title}</span>
      </label>
      <button>
        <img src={iconCross} onClick={() => deleteTodo(id)} />
      </button>
    </li>
  );
};
export default TodoItem;
