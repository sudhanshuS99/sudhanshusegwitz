import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodo([...todo, newTask]);
  };

  const deleteTask = (taskName) => {
    setTodo();
  };
  return (
    <div className="App ">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className="list ">
        {todo.map((task, key) => {
          return (
            <div>
              <h1>
                {key}
                {task}
              </h1>
              <button onClick={deleteTask(task)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
