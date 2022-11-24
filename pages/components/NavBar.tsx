import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Navbar.module.css';

const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">Home</Link>
        <Link href="/">Sobre Nós</Link>
        <Link href="/products">Produtos</Link>
      </li>
    </ul>
  )
}

export default NavBar