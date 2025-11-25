import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
export const ThemeDataCtx = createContext()
const ThemeCtx = (props) => {
    const [Theme, setTheme] = React.useState('Light')
  return (
    <div>
      <ThemeDataCtx.Provider value={[Theme, setTheme]}>
        {props.children}
      </ThemeDataCtx.Provider>
    </div>
  )
}

export default ThemeCtx
