import { useState } from 'react'
import RoutesContainer from './containers/RoutesContainers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RoutesContainer />
    </>
  )
}

export default App
