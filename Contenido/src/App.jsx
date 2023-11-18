import { useState } from 'react'
import './App.css'
import ContainerCard from './components/ContainerCard'
import ContainerCard2 from './components/ContainerCard2'
import ContainerCard3 from './components/ContainerCard3'

function App() {
  const [nombres, setNombres] = useState(['Guille', 'Sofi', 'Ada'])
  return (
    <>
      {/* <ContainerCard2 array={nombres} setNombres={setNombres}/> */}
      <ContainerCard3 />
    </>
  )
}

export default App
