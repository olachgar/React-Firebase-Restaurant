import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles(theme => ({
    like: {
      transform: 'rotate(180deg)',
    }
  }));

const LikeButton = ({like, handleLikeClick}) => {
    const classes = useStyles();

    return (
        <IconButton 
            className={classes.like}
            onClick={handleLikeClick} 
            color={like ? 'primary' : 'secondary'} 
            aria-label="like">
          <ThumbUpIcon />
        </IconButton>
    );
}

export default LikeButton;