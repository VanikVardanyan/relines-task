import React, {useEffect, useState} from "react";
import {deleteUser} from "../../redux/actions/userActions";
import {useDispatch} from "react-redux";

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {SingleUserProp} from "../../types/Types";

const EncourageDialog: React.FC<SingleUserProp> = ({user, inPositive}) => {
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        user.rating <= -5 && setOpen(true)
    }, [user.rating])


    const handleClose = (): void => {
        setOpen(false);
    };


    const handleEncourage = (): void => {
        dispatch(deleteUser(user.id, inPositive))
    }
    return (
        <>
            <Dialog onClose={handleClose} open={open} >
                <DialogTitle>
                    Ban {user.first_name}?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you click Yes, {user.first_name} will be removed from entire list
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