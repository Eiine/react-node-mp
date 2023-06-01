import { useState } from "react";

export const useForms = (initialState = {}) => {
  const [inputsValue, setInputsValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValues = {
      ...inputsValue,
      [name]: value,
    };

    setInputsValues(newValues);
  };

  const inputReset = () => setInputsValues(initialState);

  return { inputsValue, handleChange, inputReset };
};
