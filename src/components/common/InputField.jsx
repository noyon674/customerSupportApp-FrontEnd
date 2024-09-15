import React from "react";

const InputField = ({ type, name, value, onChange, placeholder, required }) => (
  <div className="div">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default InputField;
