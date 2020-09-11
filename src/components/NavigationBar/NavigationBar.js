import React from 'react'
import styles from './NavigationBar.module.css'

import HomeIcon from '@material-ui/icons/Home'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'
import MailIcon from '@material-ui/icons/Mail'

import Button from '@material-ui/core/Button'

const NavigationBar = ({isActive, setActive}) => {
    
    return (
        <div className={styles.container}>
            <Button onClick={() => setActive("1")} className={isActive==="1"?styles.active:styles.disabled}>
                <div className={styles.buttonContainer}>
                        <ViewCarouselIcon style={{color: "#FFFFFF", padding: "0px"}} />
                        <p>My works</p>
                </div>
            </Button>
            <Button onClick={() => setActive("2")} className={isActive==="2"?styles.active:styles.disabled}>
                <div className={styles.buttonContainer}>
                        <HomeIcon style={{color: "#FFFFFF", padding: "0px"}} />
                        <p>Home</p>
                </div>
            </Button>
            <Button onClick={() => setActive("3")} className={isActive==="3"?styles.active:styles.disabled}>
                <div className={styles.buttonContainer}>
                        <MailIcon style={{color: "#FFFFFF", padding: "0px"}} />
                        <p>Contact</p>
                </div>
                
            </Button>
        </div>
    )
}

export default NavigationBar
