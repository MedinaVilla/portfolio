import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import styles from "./../styles/components/Navbar.module.css";
import { useRouter } from 'next/router';
import useScrollPosition from '../hooks/useScrollPosition';
import { useWindowSize } from '../hooks/useWindowSize';
import Animation from './Animation';


const Navbar = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState();

    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const [showNavbarAside, setShowNavbarAside] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router.pathname === "/") {
            setActiveLink(0);
        } else if (router.pathname === "/acerca_de") {
            setActiveLink(1);
        } else if (router.pathname === "/portfolio") {
            setActiveLink(2);
        } else {
            setActiveLink(3);
        }
    }, [router])

    useEffect(() => {
        if (scrollPosition == 0) {
            setLoading(false);
        }
    }, [scrollPosition])

    if (loading) <></>; else
        return (
          <div className={`${styles.navbar} ${!scrollPosition == 0 && !showNavbarAside ? styles.opacity : ""}`}>
                {
                    windowSize.width < 660 ? <><div onClick={() => { setShowNavbarAside(!showNavbarAside) }} className={styles.logo} >
                        <Image layout="fill" src='/hamburguer.svg' alt="twitter"></Image>
                    </div>
                        {
                            <div className={`${styles.navbar_aside} ${showNavbarAside && styles.open}`}>
                                <div>
                                    <ul className={styles.ulMobile}>
                                        <Link href="/" ><li onClick={() => { setShowNavbarAside(false) }} className={activeLink == 0 ? styles.active : ""}>Inicio</li></Link>
                                        <Link href="/acerca_de"><li onClick={() => { setShowNavbarAside(false) }} className={activeLink == 1 ? styles.active : ""}>Acerca</li></Link>
                                        <Link href="/portfolio"><li onClick={() => { setShowNavbarAside(false) }} className={activeLink == 2 ? styles.active : ""}>Portfolio</li></Link>
                                        <Link href="/contacto"><li onClick={() => { setShowNavbarAside(false) }} className={activeLink == 3 ? styles.active : ""}>Contacto</li></Link>
                                    </ul>
                                </div>
                            </div>
                        }
                    </> : <><div>
                        LOGO
                    </div>
                        <div>
                            <ul className={styles.ul}>
                                <Link href="/"><li className={activeLink == 0 ? styles.active : ""}>Inicio</li></Link>
                                <Link href="/acerca_de"><li className={activeLink == 1 ? styles.active : ""}>Acerca</li></Link>
                                <Link href="/portfolio"><li className={activeLink == 2 ? styles.active : ""}>Portfolio</li></Link>
                                <Link href="/contacto"><li className={activeLink == 3 ? styles.active : ""}>Contacto</li></Link>
                            </ul>
                        </div>
                        <div className={styles.logo_container}>
                            <div className={styles.logo} >
                                <Image layout="fill" src='/twitter.svg' alt="twitter"></Image>
                            </div>
                            <div className={styles.logo} >
                                <Image layout="fill" src='/github.svg' alt="github"></Image>
                            </div>
                            <div className={styles.logo} >
                                <Image layout="fill" src='/linkedin.svg' alt="linkedin"></Image>
                            </div>
                        </div>
                    </>
                }



            </div>
        );
}

export default Navbar;
