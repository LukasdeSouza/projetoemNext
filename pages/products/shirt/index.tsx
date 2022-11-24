import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import styles from '../../../styles/Products.module.css'


const Shirt = () => {
  return (
    <>
      <Head>
        <title>Camisetas</title>
      </Head>
      <div>Camisa - R$19,99</div>
      <div className={styles.list}>
        <Link href='/products/shirt/red'>Camisa Vermelha</Link>
        <Link href='/products/shirt/blue'>Camisa Azul</Link>
      </div>
    </>
  )
}

export default Shirt