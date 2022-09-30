import React, { useEffect, useRef } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import styles from "./../styles/components/Animation.module.css";

const Animation = ({ children, from = "", className, fadeIn = false }) => {
    const scrollPosition = useScrollPosition();
    const divAnimationRef = useRef(null)

    useEffect(() => {
        let windowHeight = window.innerHeight;
        let elementTop = divAnimationRef.current.getBoundingClientRect().top;
        let elementVisible = 100;
        let directionCSS = "";

        if (from == "left") {
            directionCSS = styles.activeFL;
        } else if (from == "right") {
            directionCSS = styles.activeFR;
        } else if (from == "top") {
            directionCSS = styles.activeFT;
        } else if (from == "bottom")
            directionCSS = styles.activeFB;

        if (elementTop < windowHeight - elementVisible) {
            directionCSS && divAnimationRef.current.classList.add(directionCSS);
            if (fadeIn) {
                divAnimationRef.current.classList.add(styles.activeFI);
            }
        } else {
            divAnimationRef.current.classList.remove(directionCSS);
            if (fadeIn) {
                directionCSS && divAnimationRef.current.classList.remove(styles.activeFI);
            }
        }
    }, [scrollPosition, divAnimationRef, from, fadeIn])


    return (
        <div className={` ${styles.reveal} ${className}`} ref={divAnimationRef}>
            {children}
        </div>
    );
}

export default Animation;
