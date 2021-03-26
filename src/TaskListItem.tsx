import { Task } from "./model/task"
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export interface TaskListItemProps {
  task: Task;
}

export const TaskListItem = ({ task }: TaskListItemProps) => {
  return (
    <>
      <Checkbox
        checked={task.completed}
        onChange={(event) => {
          // TODO: complete task
          // get value from event.target.checked
        }} />
      <ListItemText
        primary={task.text}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            // TODO: delete task
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  )
}