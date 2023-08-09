const TextArea = ({ label, name, value, onChange }) => {
  return (
    <div className='form-group'>
      <textarea placeholder=' '
        name={name}
        id=""
        rows="3"
        className='resize-none input'
        value={value}
        onChange={onChange}
      >
      </textarea>
      <label htmlFor="" className='label'>{label}</label>
    </div>
  )
}

export default TextArea