import React from "react";

import { Box, Button, ButtonGroup, Divider } from "@material-ui/core";
import { SingleUserProp } from "../../types/Types";
import { addToConfigList } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const UserInConfig: React.FC<SingleUserProp> = ({ user }) => {
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(addToConfigList(user));
  };

  return (
    <Box className="users-in-config">
      <Box className="users-in-config-box">
        <Box>
          <img style={{ width: "100%" }} src={user.avatar} alt={user.first_name + "'s image"} />
        </Box>
        <h4>
          {" "}
          {user.first_name} {user.last_name}
        </h4>
      </Box>

      <ButtonGroup orientation={"vertical"} variant="outlined">
        <Button onClick={handleClick}> + </Button>

        <Button onClick={handleClick}> - </Button>
      </ButtonGroup>

      <Divider />
    </Box>
  );
};

export default UserInConfig;
