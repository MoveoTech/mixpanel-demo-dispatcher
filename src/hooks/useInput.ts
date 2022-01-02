import { useState } from "react";

const useInput = (validateValue: (value: string) => {}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredValue(e.currentTarget.value);
  };
  
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    isTouched,
    valueChangeHandler,
    setIsTouched,
    setEnteredValue,
    reset,
  };
};

export default useInput;
