import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
    like: {
      transform: 'rotate(180deg)',
    }
  }));

const ShareButton = ({like, handleLikeClick}) => {
    const classes = useStyles();

    return (
        <IconButton 
            className={classes.like}
            onClick={handleLikeClick} 
            color={like ? 'primary' : 'secondary'} 
            aria-label="like">
          <ShareIcon />
        </IconButton>
    );
}

export default ShareButton;