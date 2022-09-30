import Link from 'next/link';
import React from 'react';
import styles from "./../styles/components/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                2022 Diseñado y construido por  <span className={styles.highlight}>Jesús Medina</span>
            </div>
            <ul className={styles.list}>
                <Link href="/"><li>
                    Inicio
                </li></Link>
                <Link href="/acerca_de"><li >
                    Acerca de
                </li></Link>
                <Link href="/portfalio"><li>
                    Portfolio
                </li></Link>
                <Link href="/contacto"><li>
                    Contacto
                </li></Link>
            </ul>
        </footer>
    );
}

export default Footer;
