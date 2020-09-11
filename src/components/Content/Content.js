import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import styles from './Content.module.css'

const Content = () => {

    return (
        <div className={styles.content}>
                <h2>Hello, I'm</h2>
                <RoughNotation type="highlight" show={true} color="#FFFFFF" padding={0} iterations="3" animationDelay="500" animationDuration="1500">
                <h1>Bartosz</h1>
                </RoughNotation>
                <RoughNotation type="underline" show={true} color="#FFFFFF" animationDelay="2000" iterations="1">
                <h3>Front-end developer</h3>
                </RoughNotation>
        </div>
    )
}

export default Content
