import React from "react";
import { Task } from "./model/task";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { TaskListItem } from "./TaskListItem";

export interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <TaskListItem task={task} />
        </ListItem>
      ))}
    </List>
  )
};