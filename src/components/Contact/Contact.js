import React from 'react'
import styles from './Contact.module.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { RoughNotation } from 'react-rough-notation'

const Contact = () => {
    return (
        <div className={styles.container}>
            <RoughNotation type="highlight" show={true} color="white" animationDelay="200" animationDuration="1500">
                <h1 className={styles.header}>Contact</h1>
            </RoughNotation>
            <br />
            <RoughNotation className={styles.box} type="box" show={true} color="white" animationDelay="1000" animationDuration="1500">
                <div className={styles.methods}>
                    <div className={styles.methodsItem}>
                        <AlternateEmailRoundedIcon style={{color: "#FFFFFF"}} />
                        <a className={styles.methodsURL} href="mailto:bfbednarczyk@gmail.com">bfbednarczyk@gmail.com</a>
                    </div>
                    <div className={styles.methodsItem}>
                        <GitHubIcon style={{color: "#FFFFFF"}}/>
                        <a className={styles.methodsURL} target="_blank" href="https://www.github.com/BartoszBednarczyk">github.com/BartoszBednarczyk</a>
                    </div>
                    <div className={styles.methodsItem}>
                        <LinkedInIcon style={{color: "#FFFFFF"}}/>
                        <a className={styles.methodsURL} target="_blank" href="https://www.linkedin.com/in/bartoszbednarczyk/">linkedin.com/in/bartoszbednarczyk/</a>
                    </div>
                </div>
            </RoughNotation>
        </div>
    )
}

export default Contact
