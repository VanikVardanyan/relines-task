import React from "react";
import {Box, Divider} from "@material-ui/core";
import PositiveRating from "./positiveRating";
import NegativeRating from "./negativeRating";

const UsersWithRating: React.FC = () => {


    return (
        <Box className="users-with-rating-list-container">
            <PositiveRating/>
            <Divider orientation="vertical" variant="fullWidth"/>
            <NegativeRating/>


        </Box>
    );
};

export default UsersWithRating;