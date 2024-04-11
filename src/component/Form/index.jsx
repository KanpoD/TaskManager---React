import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setTaskTitle } from "../../store/Slice/tasksSlice.js";

const Form = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const title = useSelector((state) => state.tasks.taskTitle);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setTaskTitle(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingTask = tasks.find((task) => task.title === title);
    if (existingTask) {
      setError("Cette tâche existe deja");
      return;
    }
    setError("");

    if (title.trim() === "") {
      return;
    }
    dispatch(addTask());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a task</h3>
      <div className="form_container">
        <input
          onChange={handleChange}
          value={title}
          type="text"
          name="title"
          placeholder="Entrez votre tâche"
        />
        <input type="submit" value="Add" className="input" />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;
