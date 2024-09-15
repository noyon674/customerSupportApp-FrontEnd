import { useState } from "react";

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return { values, setValues, errors, setErrors, handleChange, resetForm };
};
