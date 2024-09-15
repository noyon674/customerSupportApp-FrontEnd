import React from 'react'

function TextAreaField({name, value, onChange, required}) {
  return (
    <div>
        <textarea 
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        />
    </div>
  )
}

export default TextAreaField