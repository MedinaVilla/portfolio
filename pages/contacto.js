import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Portfolio.module.css'

export default function AcercaDe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Navbar/>
      </main>

    </div>
  )
}
