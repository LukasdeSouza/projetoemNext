import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import styles from '../../../styles/Products.module.css'

const Pants = () => {
  return (
    <React.Fragment>
      <Head>
        <title>
          Calças
        </title>
      </Head>
      <div>Calça - R$ 99,99</div>
      <div className={styles.list}>
        <Link href='/products/pants/red'>Calça Vermelha</Link>
        <Link href='/products/pants/blue'>Calça Azul</Link>
      </div>
    </React.Fragment>
  )
}

export default Pants