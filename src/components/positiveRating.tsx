import React from "react";
import {Box, Divider} from "@material-ui/core";
import { useSelector} from "react-redux";
import {positiveRated} from "../redux/selectors/userSelectors";
import UserInList from "./users/userInList";

const PositiveRating: React.FC = () => {
    const positiveRatedUsers = useSelector(positiveRated)

    return (
        <Box sx={{
            width: "100%",

        }}>

            <h3> Positive rated users</h3>

            <Divider variant="fullWidth"/>
            {!!positiveRatedUsers && positiveRatedUsers.map(user => <UserInList inPositive={true} key={user.id} user={user}/>)}
        </Box>
    );
};

export default PositiveRating;