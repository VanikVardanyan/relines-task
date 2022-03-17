import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {removeToMainList} from "../../redux/actions/userActions";
import {DeleteDialogPropsType} from "../../types/Types";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import {DeleteRounded} from "@material-ui/icons";

const DeleteDialog: React.FC<DeleteDialogPropsType> = ({user, inPositive}) => {

    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handleClickOpen = (): void => {
        setOpen(true);
    };


    const handleClose = (): void => {
        setOpen(false);
    };


    const handleDelete = (): void => {
        dispatch(removeToMainList(user, inPositive))
    }


    return (
        <>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
            >
                <DeleteRounded/>
            </Button>
            <Dialog onClose={handleClose} open={open} aria-labelledby="responsive-dialog-title">
                <DialogTitle>
                    Remove user?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you click Delete button, this user will moved to left list.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button
                        color="secondary"
                        variant="outlined"
                        onClick={handleClose}
                    > Cancel</Button>
                    <Button
                        onClick={handleDelete}
                        color="primary"
                        variant="contained"
                    > Delete</Button>

                </DialogActions>
            </Dialog>
        </>

    );
};

export default DeleteDialog;