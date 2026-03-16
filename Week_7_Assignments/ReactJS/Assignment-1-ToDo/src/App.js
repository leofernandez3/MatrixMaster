import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (!task.trim()) return; // Task input required

    const newItem = {
      id: Date.now(),
      task,
      description,
    };

    setList([...list, newItem]);
    setTask("");
    setDescription("");
  };

  const handleDone = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="page">
      <h3>New task:</h3>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Task?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h3>My ToDo list:</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>
              <b>{item.task}</b>: {item.description}
            </span>
            <button onClick={() => handleDone(item.id)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;