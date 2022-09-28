import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MedinaVilla: ¡Hola!</title>
        <meta name="description" content="Hola, soy Jesús Medina, Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <div className={styles.image} >
              <Image layout="fill" src='/image.png' alt="image"></Image>
            </div>
          </div>
        </div>

        <div className={styles.head}>
          <h3>Hola, soy <span className={styles.name}>Jesús Medina</span></h3>
          <div>
            FullStack Developer
          </div>
          <div>
            <Link href="/acerca_de"><button className={styles.button_primary}>Conóceme</button></Link>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.flexbox}>
            <div className={styles.box}>
              <div>
                <div className={styles.top_card}>
                  <div className={styles.logo} >
                    <Image layout="fill" src='/webd_icon.svg' alt="web_development"></Image>
                  </div>
                </div>
                <h2>Web Development</h2>
                <p className={styles.description}>
                  Me apasiona diseñar, maquetar y construir páginas WEB con buenas prácticas, optimización y una gran experiencia de usuario
                </p>
                <p className={styles.foot}>
                  Las tecnologías que me encantan usar son:
                </p>
                <ul className={styles.list}>
                  <li>React JS/TS</li>
                  <li>Angular TS/JS</li>
                  <li>JQuery</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div>
                <div className={styles.top_card}>
                  <div className={styles.logo} >
                    <Image layout="fill" src='/backd_icon.svg' alt="web_development"></Image>
                  </div>
                </div>
                <h2>Backend Development</h2>
                <p className={styles.description}>
                  Tengo una experiencia en la construcción de APIS y servidores que permitirán un consumo de los datos de una manera eficiente y organizada
                </p>
                <p className={styles.foot}>
                  Las tecnologías que me encantan usar son:
                </p>
                <ul className={styles.list}>
                  <li>Node JS</li>
                  <li>Express</li>
                  <li>Java</li>
                  <li>GraphQL</li>
                  <li>MySQL</li>
                  <li>Mongo DB</li>
                </ul>
              </div>
              <div>
                <div className={styles.top_card}>
                  <div className={styles.logo} >
                    <Image layout="fill" src='/javascript_icon.svg' alt="web_development"></Image>
                  </div>
                </div>
                <h2>Javascript Lover</h2>
                <p className={styles.description}>
                  Me <strong>ENCANTA </strong>Javascript en todos sus formas y sabores. Es una de las tecnologías más usadas en el desarrollo de software y lo seguirá siendo.
                </p>
                <p className={styles.foot}>
                  Las tecnologías que me encantan usar son:
                </p>
                <ul className={styles.list}>
                  <li>MERN Stack</li>
                  <li>MEAN Stack</li>
                  <li>Javascript ES6</li>
                  <li>Typescript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.technologies_container}>
            <div>
              <h2>Mis <span className={styles.bold}>Proyectos</span></h2>
              <p>
                He realizados proyectos de aplicaciones WEB poniendo siempre como prioridad la experiencia de usuario, que sean responsivas para Desktop, Tableta y celulares.
                <br /> <br />
                Dale un vistazo, anda, no seas tímido
              </p>
              <div>
                <button className={styles.button_secondary}>Ver proyectos</button>
              </div>
            </div>
            <div className={styles.preview} >
              <Image layout="fill" src='/twitter_preview.png' alt="web_development"></Image>
            </div>
          </div>
        </div>

        <Footer/>
      </main >
    </div >
  )
}
