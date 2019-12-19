import React, {useState} from 'react'; 
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ShowIngredientsButton = ({Ingredients}) => {

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
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ShowIngredientsButton;