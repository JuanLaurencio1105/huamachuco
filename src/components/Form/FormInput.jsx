import React from 'react'

const FormInput = ({
  type,
  name,
  label,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={`input`}
        placeholder=' '
        value={value}
        name={name}
        onChange={onChange}
      />
      <label
        htmlFor={label}
        className='label'
      >
        {label}
      </label>
    </div>
  )
}

export default FormInput