import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Portfolio.module.css'
import Animation from '../components/Animation'

export default function AcercaDe() {
  const medwitterLogos = [{ name: "Angular", path: "/angular.svg" }, { name: "Typescript", path: "/typescript.svg" }, { name: "CSS3", path: "/CSS.svg" }, { name: "Node JS", path: "/node.svg" }, { name: "Express", path: "/express.svg" }, { name: "Mongo DB", path: "/mongo.svg" }];
  const medinagramLogos = [{ name: "React", path: "/react.svg" }, { name: "Next JS", path: "/next.svg" }, { name: "CSS3", path: "/CSS.svg" }];
  const pizzeriaLogos = [{ name: "React", path: "/react.svg" }, { name: "CSS3", path: "/CSS.svg" }];
  const parrasLogos = [{ name: "React Native", path: "/react.svg" }, { name: "Expo", path: "/expo.svg" }, { name: "Google Maps", path: "/maps.svg" }, { name: "Firebase", path: "/firebase.svg" }, { name: "Node JS", path: "/node.svg" }, { name: "Express", path: "/express.svg" }, { name: "Google Cloud", path: "/google_cloud.svg" }]

  return (
    <div className={styles.container}>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Te presento mis últimos proyectos que he realizado:" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.image} >
            <Image layout="fill" src='/twitter_preview.png' alt="medwitter"></Image>
          </div>
          <div className={styles.content}>
            <h3 align="right" className={styles.subtitle}>Medwitter </h3>

            <Animation from='right'>
              <div className={styles.box}>
                Una página réplica de la aplicación web de Twitter. Cuenta con funcionalidad base de la plataforma y todos los módulos que contiene. Fue realizado con base al módulo de diseño CCS3 Flexbox y media queries para que sea responsivo para múltiples dispositivos.
                <div>
                  <div className={styles.techs_container}>
                    {
                      medwitterLogos.length > 0 && medwitterLogos.map((logo, index) => {
                        return <div key={`logo-${index}`}><div className={styles.logo} >
                          <Image layout="fill" src={logo.path} alt="logo"></Image>
                        </div>
                          <div className={styles.logo_name}>
                            {logo.name}
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </Animation>
            <br />  <br />
          </div>
        </div>

        <div className={styles.wrapperRev}>
          <div className={styles.content}>
            <Animation from='left'>
              <h3 align="left" className={styles.subtitle}>Medinagram</h3>
              <div className={styles.box}>
                Una página réplica de la aplicación web de Instagram. Desde el feed, mensajes de Direct, explorar y perfil. Fue realizado con base al módulo de diseño CCS3 Flexbox y media queries para que sea responsivo para múltiples dispositivos.
                <div>
                  <div className={styles.techs_container}>
                    {
                      medinagramLogos.length > 0 && medinagramLogos.map((logo, index) => {
                        return <div key={`logo-${index}`}><div className={styles.logo} >
                          <Image layout="fill" src={logo.path} alt="logo"></Image>
                        </div>
                          <div className={styles.logo_name}>
                            {logo.name}
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </Animation>
            <br />  <br />
          </div>
          <div className={`${styles.image} ${styles.overlap}`} >
            <Image layout="fill" src='/medinagram_preview.png' alt="medinagram"></Image>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image} >
            <Image layout="fill" src='/pizzeria.png' alt="pizzeria"></Image>
          </div>
          <div className={styles.content}>
            <Animation from='right'>
              <h3 align="right" className={styles.subtitle}>Pizzería Dominos </h3>
              <div className={styles.box}>
                Una página réplica de la aplicación web de la pizzeria Dominos. Simulación de e-commerce, con proceso de compra, carrito y pago. Fue realizado con base al módulo de diseño CCS3 Flexbox y media queries para que sea responsivo para múltiples dispositivos.
                <div>
                  <div className={styles.techs_container}>
                    {
                      pizzeriaLogos.length > 0 && pizzeriaLogos.map((logo, index) => {
                        return <div key={`logo-${index}`}><div className={styles.logo} >
                          <Image layout="fill" src={logo.path} alt="logo"></Image>
                        </div>
                          <div className={styles.logo_name}>
                            {logo.name}
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </Animation>
            <br />  <br />
          </div>
        </div>

        <div className={styles.wrapperRev}>
          <div className={styles.content}>
            <Animation from='left'>
              <h3 align="left" className={styles.subtitle}>Parras</h3>
              <div className={styles.box}>
                Aplicación móvil para la recomendación de restaurantes con base en las opiniones recabadas en la plataforma de Google Maps. Se utilizó una estructura basada en microservicios.
                <div>
                  <div className={styles.techs_container}>
                    {
                      parrasLogos.length > 0 && parrasLogos.map((logo, index) => {
                        return <div key={`logo-${index}`}><div className={styles.logo} >
                          <Image layout="fill" src={logo.path} alt="logo"></Image>
                        </div>
                          <div className={styles.logo_name}>
                            {logo.name}
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </Animation>
            <br />  <br />
          </div>
          <div className={`${styles.image} ${styles.overlap}`} >
            <Image layout="fill" src='/parras_preview.png' alt="parras" objectFit="contain"></Image>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

