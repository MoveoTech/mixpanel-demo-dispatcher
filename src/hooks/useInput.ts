import { useState } from "react";

const useInput = (value: string) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredValue(e.currentTarget.value);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isTouched,
    valueChangeHandler,
    setIsTouched,
    setEnteredValue,
    reset,
  };
};

export default useInput;
