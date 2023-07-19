import React from 'react'

const FormInput = ({
  type,
  name,
  label,
  value
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={`input`}
        placeholder=' '
        value={value}
        name={name}
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