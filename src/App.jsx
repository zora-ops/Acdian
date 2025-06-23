import { React, useState } from 'react'
import Acodian from './componentss/acodian'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-400 font-bold'>hey there my name is abhishek</h1>
      <Acodian />
    </>
  )
}

export default App
