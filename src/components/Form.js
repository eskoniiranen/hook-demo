import React, { useState } from 'react'

const Form = () => {
  const useField = type => {
    const [value, setValue] = useState('')
    const onChange = event => setValue(event.target.value)

    return { type, value, onChange }
  }

  const string = useField('text')
  const number = useField('number')
  const date = useField('date')
  const email = useField('email')

  return (
    <div className="App-example">
      <form>
        <span>String:
          <input {...string} />
        </span>
        <span className="space">Number:
          <input {...number} />
        </span>
        <span className="space">Date:
          <input {...date} />
        </span>
        <span className="space">Email:
          <input {...email} />
        </span>
      </form>

      <div className="App-drama"> 
        {`
          ${string.value}
          ${number.value}
          ${date.value}
          ${email.value}
        `}
      </div>
    </div>)
}
export default Form
