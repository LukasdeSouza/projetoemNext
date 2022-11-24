import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import styles from '../../styles/MainContainer.module.css'


const MainContainer = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  )
}

export default MainContainer