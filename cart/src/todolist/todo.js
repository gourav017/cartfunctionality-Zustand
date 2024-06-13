import { useState } from "react";

const Todo = () => {
  const [Todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const hanldeAddtask = () => {
    setTodo([...Todo, { id: Todo.lenght + 1, todo: task }]);
  };
  return (
    <>
      <input
        placeholder="type your task here..."
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={hanldeAddtask}>add a task</button>
      {Todo.map((t) => (
        <li>
          {t.todo}
          {t.id}
        </li>
      ))}
    </>
  );
};

export default Todo;
