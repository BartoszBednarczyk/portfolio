import React, { useState } from 'react'
import styles from './WorkCard.module.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';  
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import InputIcon from '@material-ui/icons/Input';
import IconButton from '@material-ui/core/IconButton';
import grey from '@material-ui/core/colors/grey';

import WorkCardModal from '../WorkCardModal/WorkCardModal'


const useStyles = makeStyles({
    root: {
      
    },
    media: {
      height: 200,
      
    },
  });

const WorkCard = ({props}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
      setOpen(true)
      console.log('open')
    }
    const handleClose = () => {
      setOpen(false)
      console.log('close')
    }
    const test = (e) => {
      window.open(`${props.liveURL}`)
      e.stopPropagation()
    }

  return (
      <div className={styles.container}>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        onBackdropClick={console.log('test')}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <WorkCardModal props={props} />
        </Fade>
      </Modal>

    {/* <Card  variant="outlined">
      <CardActionArea className={styles.root} onClick={() => handleOpen()}>
        <CardMedia
          className={classes.media}
          image={props.imgURL}
          title={props.name}
        />
        <CardContent className={styles.titleContainer}>
      <h1 className={styles.title}>{props.name}</h1>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" fullWidth="true" style={{outlineColor: '#FFFFFF', color: '#FFA505', padding: '2px'}} href={props.liveURL}>
            <p className={styles.liveButtonText}>Live</p>
        </Button>
        
      </CardActions>
    </Card> */}
    <div className={styles.innerContainer} onClick={handleOpen}  style={{
       backgroundImage: `url(${props.imgURL})`,
       backgroundSize: `cover`, 
       backgroundRepeat: `no-repeat`,
       backgroundPosition: `center`}}>
    <div className={styles.titleContainer}>
    <h1 className={styles.title}>{props.name}</h1>
    {/* <button className={styles.urlButton} onClick={test}>C</button> */}
    {/* <Button startIcon={<CodeIcon />}></Button> */}
    <IconButton onClick={test} style={{color: grey[100]}}>
      <InputIcon />
    </IconButton>
    </div>
    </div>
    
    

      </div>
    
  );
}

export default WorkCard
