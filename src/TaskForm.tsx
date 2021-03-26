import { Task } from "./model/task";
import TextField from '@material-ui/core/TextField';
import { useInputState } from "./hooks/useInputState";

export interface TaskFormProps {
  addTask: (task: Task) => void;
}

export const TaskForm = ({ addTask }: TaskFormProps) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addTask({ text: value });
        reset();
      }}
    >
      <TextField
        fullWidth={true}
        margin="normal"
        placeholder="Add task"
        onChange={onChange}
        value={value}
      />
    </form>
  )
};