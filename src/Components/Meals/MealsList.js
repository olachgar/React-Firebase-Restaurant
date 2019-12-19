import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import tileData from './tileData';
import MealCard from './MealCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    alignContent: 'left',
    flexDirection: 'row',
    justifyContent: 'left',
    overflow: 'hidden'
  }
}));

const MealsList = () => {
  const classes = useStyles();
  const [data, setData] = useState(tileData);

  useEffect(() => {
    console.log('data => ', data)
  }, [])

  return (
    <div className={classes.root}>
        {
        data.map((meal) => <MealCard key={meal.id}  meal={meal} />)
        }    
    </div>
  );
}

export default MealsList;