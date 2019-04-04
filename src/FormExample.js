import React, { useState } from 'react'

const FormExample = () => {
  const useField = type => {
    const [value, setValue] = useState('')
    const onChange = event => setValue(event.target.value)

    return { type, value, onChange }
  }

  const string = useField('text')
  const number = useField('number')
  const date = useField('date')
  const email = useField('email')

  return <div className="App-example">
      <form>
        <span className="space">String:</span>
        <input {...string} />
        <br />
        <span className="space">Number:</span>
        <input {...number} />
        <br />
        <span className="space">Date:</span>
        <input {...date} />
        <br />
        <span className="space">Email:</span>
        <input {...email} />
      </form>

      <div className="App-drama"> 
        {string.value}<br />
        {number.value}<br />
        {date.value}<br />
        {email.value}<br />
      </div>
    </div>
}
export default FormExample
