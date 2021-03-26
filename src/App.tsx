import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { TaskList } from './TaskList';
import { useTaskState } from './hooks/useTaskState';
import { TaskForm } from './TaskForm';

function App() {
  const { tasks, addTask } = useTaskState([]);

  return (
    <div className="app">
      <Typography variant="h4">Tasks</Typography>
      <TaskForm addTask={(task) => {
        if (task) {
          addTask(task);
        }
      }} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
