import { useState } from "react";
import { Navbar, NewTodoForm, TodoList } from "./components";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);

  const handleTheme = (theme) => {
    document.documentElement.setAttribute("color-scheme", theme);
  };

  const addTodo = (title) => {
    setTodoArray((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodoArray((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: completed,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodoArray((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  const clearCompleted = () => {
    setTodoArray((currentTodo) => {
      return currentTodo.filter((todo) => todo.completed === false);
    });
  };

  return (
    <>
      <Navbar handleTheme={handleTheme} />
      <NewTodoForm addTodo={addTodo} />
      <TodoList
        todoArray={todoArray}
        setTodoArray={setTodoArray}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        clearCompleted={clearCompleted}
      />
    </>
  );
};
export default App;
