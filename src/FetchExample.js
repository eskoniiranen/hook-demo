import React, { useState, useEffect } from 'react'

const FetchExample = () => {
  const [doggos, setDoggos] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch('https://koira-api.herokuapp.com/api/v1/dogs')
    setDoggos(await response.json())
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <ul className="App-example">
    { loading 
      ? (<span className="App-drama">loading...</span>)
      : doggos
        .filter(d => d.title.split(' ').length > 1)
        .map(d => 
          <li key={d.id}>
            <a href={d.url}>
              {d.title}
            </a>
          </li>)}
    </ul>
}

export default FetchExample
