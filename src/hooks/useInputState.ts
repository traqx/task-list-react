import { useState } from 'react';

type InputEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export const useInputState = () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: (event: InputEvent) => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  };
};