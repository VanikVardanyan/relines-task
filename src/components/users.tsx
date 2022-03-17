import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../redux/selectors/userSelectors";

import { Box, Button, ButtonGroup, Divider, Typography } from "@material-ui/core";
import { LoaderCircle } from "./loaders/LoaderCircle";

import UserInConfig from "./users/userInConfig";

import { Refresh } from "@material-ui/icons";

import { fetchNewUsers, refresh } from "../redux/actions/userActions";
import { API } from "../API/API";
import { SingleUser } from "../types/Types";
import { INITIAL_USER_COUNT } from "../constants";
import { randomIntegers } from "../helper";

export const Users: React.FC = () => {
  const [shouldFetchNewUsers, setShouldFetchNewUsers] = useState<boolean>(false);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    API.get<any, { data: SingleUser[] }>(`/?size=${INITIAL_USER_COUNT}`).then((res) => {
      const usersWithRating = res.data.map((user) => ({ ...user, rating: randomIntegers(-5, 5) }));
      dispatch(fetchNewUsers(usersWithRating));
    });
  }, [shouldFetchNewUsers, dispatch]);

  const handleRefresh = () => {
    dispatch(refresh());
  };

  const handleNextClick = () => {
    setShouldFetchNewUsers((p) => !p);
  };

  return (
    <Box className="users-list-container">
      <Box className="users-list-container-heading">
        <h3>All users </h3>
        <Typography variant="subtitle2" color="textSecondary" style={{ marginBottom: 0 }}>
          {users.length} users
        </Typography>
      </Box>

      <ButtonGroup variant={"text"}>
        <Button onClick={handleRefresh}>
          <Refresh />
        </Button>

        <Button onClick={handleNextClick}> Next</Button>
      </ButtonGroup>

      <Divider />
      {!!users.length ? (
        users
          .sort((a, b) => b.rating - a.rating)
          .map((user) => <UserInConfig inPositive={false} key={user.id} user={user} />)
      ) : (
        <LoaderCircle />
      )}
    </Box>
  );
};
