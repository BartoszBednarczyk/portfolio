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
    }
    const handleClose = () => {
      setOpen(false)
    }

  return (
      <div className={styles.container}>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
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
<Fade in={true} timeout={600} className={styles.root}>
    <Card  >
      <CardActionArea clasName={styles.root} onClick={() => handleOpen()}>
        <CardMedia
          className={classes.media}
          image={props.imgURL}
          title={props.name}
        />
        <CardContent>
      <h1 className={styles.title}>{props.name}</h1>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" fullWidth="true" style={{outlineColor: '#FFFFFF', color: '#FFA505', padding: '2px'}} href={props.liveURL}>
            <p className={styles.liveButtonText}>Live</p>
        </Button>
        
      </CardActions>
    </Card>
    </Fade>
      </div>
    
  );
}

export default WorkCard
