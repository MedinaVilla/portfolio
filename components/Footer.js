import React from 'react';
import styles from "./../styles/components/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                2022 Diseñado y construido por  <span className={styles.highlight}>Jesús Medina</span>
            </div>
            <ul className={styles.list}>
                <li>
                    Inicio
                </li>
                <li>
                    Acerca de
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Contacto
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
