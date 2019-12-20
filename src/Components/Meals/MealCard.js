import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import LikeButton from '../Shared/LikeButton';
import DisLikeButton from '../Shared/DisLikeButton';
import ShowIngredientsButton from './ShowIngredientsButton';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin:10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'secondary',
  },
}));

const MealCard = ({meal}) => {
  const classes = useStyles();
  const [favorite, setFavorite] = useState(false)
  const [like, setLike] = useState(null)

  const handleFavoriteClick = () => {
      setFavorite(!favorite);
  }

  const handleLikeClick = () => {
    setLike(!like);
    console.log('ingredients => ', {meal}.ingredients)
  }
  
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton onClick={handleFavoriteClick} 
          color={favorite ? 'primary' : ''} 
          aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={meal.title}
        subheader="Liked x times"
      />
      <CardMedia
        className={classes.media}
        image={meal.img}
        title={meal.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <DisLikeButton like={like} handleLikeClick={handleLikeClick} />
        <LikeButton like={like} handleLikeClick={handleLikeClick} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ShowIngredientsButton>
          <>
          <DialogTitle id="responsive-dialog-title">
            <strong>{meal.title}</strong> ingredients {meal.ingredients} :
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span>Ingredients to make a <strong>{meal.title}</strong> are :</span>
              <ul>
                <li>Ingredient #01</li>
                <li>Ingredient #02</li>
                <li>Ingredient #03</li>
              </ul>
            </DialogContentText>
          </DialogContent>
          </>
        </ShowIngredientsButton>
        
      </CardActions>
    </Card>
  );
}

export default MealCard;