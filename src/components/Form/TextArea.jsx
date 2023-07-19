const TextArea = ({ label, name }) => {
  return (
    <div className='form-group'>
      <textarea placeholder=' '
        name={name}
        id=""
        rows="3"
        className='resize-none input'
      >
      </textarea>
      <label htmlFor="" className='label'>{label}</label>
    </div>
  )
}

export default TextArea