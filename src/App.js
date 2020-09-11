import React, { useEffect, useState } from 'react'
import styles from './App.module.css'

import NavigationBar from './components/NavigationBar/NavigationBar'
import Content from './components/Content/Content'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'

import getData from './api/index'



const App = () => {
    const [isActive, setActive] = useState("2")
    const [animateDown, setAnimateDown] = useState(false)
    const [transition, setTransition] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        getData().then(res => setData(res))
    }, [])

    return (
        <div className={styles.container}>
            
            {isActive==="1"?<Works props={data}/>:isActive==="3"?<Contact />:<Content />}
            
            
            <NavigationBar isActive={isActive} setActive={setActive} />
        </div>
    )
}

export default App
