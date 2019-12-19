import React from 'react'; 
import ShowDialog from '../Shared/ShareButton' 
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';

const ShowIngredientsButton = ({Ingredients, handleIngredientsClick}) => {

    return(
        <>
            <IconButton 
            onClick={handleIngredientsClick} 
            aria-label="Show the list of ingredients">
                <ListAltIcon />
            </IconButton>
            <ShowDialog />
        </>
    );
}

export default ShowIngredientsButton;