import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {removeToMainList} from "../../redux/actions/userActions";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

import { SingleUserProp} from "../../types/Types";

const EncourageDialog: React.FC<SingleUserProp> = ({user}) => {
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        user.rating >= 5 && setOpen(true)
    }, [user.rating])

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleEncourage = (): void => {
        dispatch(removeToMainList(user, true ))
    }

    const {first_name} = user;

    return (
        <>
            <Dialog onClose={handleClose} open={open} aria-labelledby="responsive-dialog-title">
                <DialogTitle>
                    Encourage {first_name}?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you click Yes, {first_name} will move to the left
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="secondary"
                        variant="outlined"
                        onClick={handleClose}
                    > Cancel</Button>
                    <Button
                        onClick={handleEncourage}
                        color="primary"
                        variant="contained"
                    > Yes</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default EncourageDialog;