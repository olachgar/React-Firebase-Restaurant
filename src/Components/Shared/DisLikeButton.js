import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles(theme => ({
    dislike: {
      transform: 'rotate(180deg)',
    }
  }));

const DisLikeButton = ({like, handleLikeClick}) => {
    const classes = useStyles();

    return (
        <IconButton 
            className={classes.dislike}
            onClick={handleLikeClick} 
            color={!like ? 'primary' : 'inherit'} 
            aria-label="dislike">
          <ThumbDownIcon />
        </IconButton>
    );
}

export default DisLikeButton;