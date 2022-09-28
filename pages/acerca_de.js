import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import styles from '../styles/AcercaDe.module.css'

export default function AcercaDe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acerca de</title>
        <meta name="description" content="Hola. Soy Jesús Medina,Ing. en Sistemas Computacionales egresado del IPN y soy un apasionado del desarrollo web y desarrollo móvil." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.flexbox}>
          <div className={styles.text}>
            Hola. Soy Jesús Medina, <span className={styles.highlight}>Ing. en Sistemas Computacionales</span> egresado del IPN y soy un apasionado del desarrollo web y desarrollo móvil.<br /><br />
            Incursioné en el desarrollo web desde el 2016 con páginas HTML & CSS y poco a poco me he ido actualizando a las tecnologías que están a la <span className={styles.highlight}>vanguardia</span> como los frameworks React, Angular, entre otros.<br /><br />
            Me encantan los retos, siempre pienso en que aprenderé y haré mañana.<br /><br />
            Últimamente me he puesto como hobbie realizar réplicas de páginas famosas como Twitter, Instagram, Pizza Dominos, etc.<br /><br />
          </div>
          <div className={styles.logo} >
            <Image layout="fill" src='/image.png' alt="twitter"></Image>
          </div>
        </div>

        <h1 align="center">Mi <span className={styles.highlight}>Trayectoria Académica</span></h1>
        <div className={styles.flexbox}>
          <div className={styles.logoSchool} >
            <Image layout="fill" src='/cecyt.png' alt="twitter"></Image>
          </div>
          <div className={styles.logoSchool} >
            <Image layout="fill" src='/ipn.webp' alt="twitter" objectFit="contain"></Image>
          </div>
          <div className={styles.logoSchool} >
            <Image layout="fill" src='/escom.png' alt="twitter"></Image>
          </div>
        </div>
        <div className={styles.wrapper}>
          <section className={styles.block}>
            <div className={styles.eachYear}>
              <div className={styles.yearTimeLine}>2015</div>
              <div className={`${styles.eachEvent} ${styles.left}`}>
                <h3>Técnico en Programación</h3>
                <p>Instituto Politécnico Nacional</p>
                Centro de Estudios Científicos y Tecnológicos No. 9 "Juan de Dios Bátiz"
                <p>del 2015 al 2018.</p>
              </div>
            </div>
          </section>

          <section className={styles.block}>
            <div className={styles.eachYear}>
              <div className={styles.yearTimeLine}>2018</div>
              <div className={`${styles.eachEvent} ${styles.right}`}>
                <h3>Ing. en Sistemas Computacionales</h3>
                <p>Instituto Politécnico Nacional</p>
                <p>Escuela Superior de Cómputo del 2018 a la Actualidad </p>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </div>
  )
}
