import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../store/Slice/tasksSlice.js';
import TaskList from '../../component/List/index.jsx';

function TaskListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <TaskList/>
    </div>
  );
}

export default TaskListPage;