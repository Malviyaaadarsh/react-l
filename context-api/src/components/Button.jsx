import React from 'react'
import { useContext } from 'react'
import { ThemeDataCtx } from '../context/ThemeCtx'
const Button = () => {
    const [Theme, setTheme] = useContext(ThemeDataCtx)
    const changeTheme = () => {
        setTheme(Theme === 'Light' ? 'Dark' : 'Light')
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
