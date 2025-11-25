import React from 'react'
import Navbar from './components/Navbar.jsx'
const App = () => {
  const [Theme , setTheme] = React.useState('light')
  return (
    <div>
      <h1>Theme  is {Theme}.</h1>
      <Navbar Theme={Theme} setTheme={setTheme} />
    </div>
  )
}

export default App
