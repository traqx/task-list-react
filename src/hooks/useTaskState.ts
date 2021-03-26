import { useState } from 'react';
import { Task } from '../model/task';

export const useTaskState = (tasks: Task[]) => {
  const [list, setList] = useState(tasks);

  return {
    tasks: list,
    addTask: (task: Task) => {
      setList([...list, task]);
    },
  }
};
