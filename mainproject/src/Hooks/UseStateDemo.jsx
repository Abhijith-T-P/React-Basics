import React, { useState } from 'react'

const UseStateDemo = () => {
    const [name, setName] = useState('') 
    const [fullname, setFullName] = useState('') 

    const AddName = () => {
     setFullName(name)
    }
  return (
    <div>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <button onClick={AddName}>Submit</button>
        {fullname}
    </div>
  )
}

export default UseStateDemo