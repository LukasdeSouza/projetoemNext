import Link from 'next/link'
import Head from 'next/head'

import React from 'react'
import styles from '../../styles/Products.module.css'

const Products = () => {
  return (
    <>
      <Head>
        <title>Página de Produtos</title>
      </Head>
      <h1>Products</h1>
      <div className={styles.list}>
        <Link href='/products/shirt'>Camisa</Link>
        <Link href='/products/pants'>Calças</Link>
      </div>
    </>
  )
}

export default Products