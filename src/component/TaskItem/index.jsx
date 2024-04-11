import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTaskComplete,
} from "../../store/Slice/tasksSlice.js";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleTaskComplete(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <p className="title">{task.title}</p>
      <input
        onChange={onToggle}
        type={"checkbox"}
        checked={task.completed}
        className="checkbox"
      />
      <button onClick={handleDelete} className="btn_list">
        X
      </button>
    </li>
  );
};

export default TaskItem;
