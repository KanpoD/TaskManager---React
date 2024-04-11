import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../store/Slice/tasksSlice.js';
import TaskItem from '../TaskItem/index.jsx';
import Form from '../Form/index.jsx';

function TaskListPage() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const lastPage = currentPage * tasksPerPage;
  const firstPage = lastPage - tasksPerPage;
  const currentTasks = tasks.slice(firstPage, lastPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2>Task List</h2>
      <Form />
      <ul>
        {currentTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div>
        {currentPage > 1 && (
          <button onClick={prevPage}>Previous</button>
        )}
        {tasks.length > lastPage && (
          <button onClick={nextPage}>Next</button>
        )}
      </div>
    </div>
  );
}

export default TaskListPage;