import React from 'react'

function SelectField({name, value, onChange, required, options}) {
  return (
    <div>
        <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}>
            {
                options.map((option, index)=> <option key={index} value={option}>{option}</option>)
            }
        </select>
    </div>
  )
}

export default SelectField