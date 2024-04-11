import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/Slice/tasksSlice.js";
import TaskItem from "../TaskItem/index.jsx";
import Form from "../Form/index.jsx";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h2>Task List</h2>
      <Form />
      <div className="list_container">
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
