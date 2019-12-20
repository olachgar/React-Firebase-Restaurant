import React, {useState} from 'react'; 
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const ShowIngredientsButton = (props) => {

    const [openDialog, setOpenDialog] = useState(null)

    const handleIngredientsClick = () => {
        setOpenDialog(true);
        console.log('handleIngredientsClick fired, with openDialog = ', openDialog)
    }

    const handleClose = () => {
        setOpenDialog(false);
        console.log('handleClose fired, with openDialog = ', openDialog)
    }

    return(
        <>
            <IconButton 
            onClick={handleIngredientsClick} 
            aria-label="Show the list of ingredients">
                <ListAltIcon />
            </IconButton>

            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                {props.children}
                <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ShowIngredientsButton;