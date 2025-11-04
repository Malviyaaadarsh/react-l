import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Header</h3>
      <button className={styles.loginbtn}>Login</button>
    </div>
  )
}
export default Header



