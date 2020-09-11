import React, { useEffect, useState } from 'react'
import styles from './Works.module.css'

import Grid from '@material-ui/core/Grid'
import WorkCard from '../WorkCard/WorkCard'
import CircularProgress from '@material-ui/core/CircularProgress';

const Works = ({props}) => {
    
    const [cards, setCards] = useState()

    useEffect(() => {
        setCards(props.map(item => (<Grid item container xs={12} sm={6} md={4}>
            <WorkCard props={item}/>
        </Grid>)))
    }, [])

    return (
        props?
        <div className={styles.container}>
            <Grid container direction='row'>
                <Grid item container xs={false} sm={1} md={1} lg={2}/>
                    <Grid item container xs={12} sm={10} md={10} lg={8} alignContent='center' alignItems='center' direction='column'>
                    <Grid item container xs={false} md={1} />
                    <Grid className={styles.grid} alignItems='center' container item xs={12} md={10} spacing={2}>
                        {/* <Grid item container xs={12} sm={6} md={4}>
                            <WorkCard />
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4}>
                            <WorkCard />
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4}>
                            <WorkCard />
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4}>
                            <WorkCard />
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4}>
                            <WorkCard />
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4}>
                            <WorkCard />
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4}>
                            <WorkCard />
                        </Grid> */}
                        {cards}
                    </Grid>
                    <Grid item container xs={false} md={1} />
                </Grid>
                <Grid item container xs={false} sm={1} md={1} lg={2}/>
            </Grid>
        </div>:
        <div className={styles.container}>
        <CircularProgress style={{color: 'white'}} />
        </div>
    )
}

export default Works
