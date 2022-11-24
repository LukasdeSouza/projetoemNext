import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import City from '../public/images/city.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial | Navegação</title>
        <meta name='keywords' content='Roupas, Calçados, Calças, Boné' />
        <meta name='description' content='Encontre as Melhores Roupas Masculinas e Femininas' />
      </Head>
      <div className={styles.container}>
        <h1>Home</h1>
        <Image src={City} alt='Image' />
      </div>
    </>
  )
}
