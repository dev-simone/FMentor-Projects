import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";

const TodoList = ({
  todoArray,
  setTodoArray,
  toggleTodo,
  deleteTodo,
  clearCompleted,
}) => {
  const [state, setState] = useState("all");

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todoArray);
    const [reorderItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderItems);
    setTodoArray(items);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="ROOT">
          {(provided) => (
            <ul
              className="todo-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {state === "completed"
                ? todoArray.map((todo, index) => {
                    if (todo.completed === true) {
                      return (
                        <Draggable
                          key={todo.id}
                          draggableId={todo.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <>
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TodoItem
                                  {...todo}
                                  key={todo.id}
                                  toggleTodo={toggleTodo}
                                  deleteTodo={deleteTodo}
                                />
                              </div>
                              <hr />
                            </>
                          )}
                        </Draggable>
                      );
                    }
                  })
                : state === "active"
                ? todoArray.map((todo, index) => {
                    if (todo.completed === false) {
                      return (
                        <Draggable
                          key={todo.id}
                          draggableId={todo.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <>
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TodoItem
                                  {...todo}
                                  key={todo.id}
                                  toggleTodo={toggleTodo}
                                  deleteTodo={deleteTodo}
                                />
                              </div>
                              <hr />
                            </>
                          )}
                        </Draggable>
                      );
                    }
                  })
                : todoArray.map((todo, index) => {
                    return (
                      <Draggable
                        key={todo.id}
                        draggableId={todo.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <>
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TodoItem
                                {...todo}
                                key={todo.id}
                                toggleTodo={toggleTodo}
                                deleteTodo={deleteTodo}
                              />
                            </div>
                            <hr />
                          </>
                        )}
                      </Draggable>
                    );
                  })}
              {provided.placeholder}

              {state === "completed" ? (
                <li>
                  <p>
                    {todoArray.filter((todo) => todo.completed === true).length}{" "}
                    items left
                  </p>
                  <button onClick={clearCompleted}>Clear Completed</button>
                </li>
              ) : state === "active" ? (
                <li>
                  <p>
                    {
                      todoArray.filter((todo) => todo.completed === false)
                        .length
                    }{" "}
                    items left
                  </p>
                  <button onClick={clearCompleted}>Clear Completed</button>
                </li>
              ) : (
                <li>
                  <p>{todoArray.length} items left</p>
                  <button onClick={clearCompleted}>Clear Completed</button>
                </li>
              )}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="todo-list__state-items-container">
        <button autoFocus onClick={() => setState("all")}>
          All
        </button>
        <button onClick={() => setState("active")}>Active</button>
        <button onClick={() => setState("completed")}>Completed</button>
      </div>
    </>
  );
};
export default TodoList;
