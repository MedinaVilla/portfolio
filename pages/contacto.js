import Head from 'next/head'
import Image from 'next/image'
import Animation from '../components/Animation'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Contacto.module.css'

export default function Contacto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Página de contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <main className={styles.main}>
        <Animation fadeIn={true}>
        <div className={styles.flexbox}>
          <div>
            <h2 className={styles.title}>Contáctame</h2>
            <p className={styles.description}>
              ¡Mándame un mensaje! Anda, no muerdo... no siempre.
            </p>
            <p className={styles.subtitle}>
              Sígueme
            </p>
            <div className={styles.logo_container}>
              <div className={styles.logo} >
                <Image layout="fill" src='/linkedin_black.svg' alt="linkedin"></Image>
              </div>
              <div className={styles.logo} >
                <Image layout="fill" src='/twitter_black.svg' alt="twitter"></Image>
              </div>
              <div className={styles.logo} >
                <Image layout="fill" src='/instagram.svg' alt="instagram"></Image>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <input className={styles.input} placeholder='Nombre'></input>
            <input className={styles.input} placeholder='Correo electrónico'></input>
            <textarea rows={4} className={styles.input} placeholder='Mensaje'></textarea>
            <div align="right">
              <button className={styles.button_secondary}>Enviar</button>
            </div>
          </div>
        </div>
        </Animation>
      </main>

      <Footer />
    </div>
  )
}
