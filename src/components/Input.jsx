import { useState } from "react"

export default function Input({label, type, name}) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <label>
      {label}
      <input 
        type={type}
        name={name}
        value={value} 
        onChange={handleChange}
      />
    </label>
  )
}