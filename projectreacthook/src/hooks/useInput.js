import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    let changedValue = event.target.value;
    let willChange = true;

    typeof validator === "function"
      ? (willChange = validator(changedValue))
      : new Error("validator should be function");

    willChange === true ? setValue(changedValue) : setValue(value);
  };

  return { value, onChange };
};
