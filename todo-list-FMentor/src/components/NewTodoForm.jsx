import { useRef, useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    inputRef.current.blur();
    setNewItem("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-container">
        <div></div>
        <input
          type="text"
          className="form__input-container__input"
          value={newItem}
          id="item"
          ref={inputRef}
          placeholder="Create a new todo..."
          autoComplete="off"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
    </form>
  );
};
export default NewTodoForm;
