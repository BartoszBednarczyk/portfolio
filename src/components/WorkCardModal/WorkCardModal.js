import React from 'react'
import styles from './WorkCardModal.module.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles({
    root: {
      margin: 0,
      padding: 0
    },
    media: {
      height: 200,
      borderRadius: 5,
    },
  });

const WorkCardModal = (props) => {
    const classes = useStyles();
    return (
        <Card className={styles.container} >
      <CardContent>
        <CardMedia
          component="img"
          className={classes.media}
          image={props.imgURL}
          title={props.name}
        />
        <h1 className={styles.header}>{props.name}</h1>
        <p className={styles.description}>{props.description}</p>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" style={{backgroundColor: '#FFA505', color: '#FFFFFF', width: 'auto', padding: '2px 2px 2px 3px'}} startIcon={<VisibilityRoundedIcon />} href={props.liveURL}>
            <p className={styles.liveButtonText}>Live</p>
        </Button>
        <Button variant="contained" size="small" style={{backgroundColor: '#FFA505', color: '#FFFFFF', width: 'auto', padding: '2px 2px 2px 3px', marginLeft: 'auto'}} startIcon={<CodeIcon />} href={props.codeURL}>
            <p className={styles.liveButtonText}>Code</p>
        </Button>
        
      </CardActions>
    </Card>
    )
}

export default WorkCardModal
