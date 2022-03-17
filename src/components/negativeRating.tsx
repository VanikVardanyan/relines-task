import React from "react";
import { useSelector } from "react-redux";
import { negativeRated } from "../redux/selectors/userSelectors";

import { Box, Divider } from "@material-ui/core";

import UserInList from "./users/userInList";

const NegativeRating = () => {
  const negativeRatedUsers = useSelector(negativeRated);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <h3>Negative rated users</h3>
      <Divider variant="fullWidth" />
      {!!negativeRatedUsers &&
        negativeRatedUsers.map((user) => <UserInList inPositive={false} key={user.id} user={user} />)}
    </Box>
  );
};

export default NegativeRating;
