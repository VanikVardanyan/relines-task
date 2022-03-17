import React from "react";
import { Box, Button, ButtonGroup, Divider } from "@material-ui/core";
import { SingleUserProp } from "../../types/Types";
import { useDispatch } from "react-redux";
import { changeRating } from "../../redux/actions/userActions";

import DeleteDialog from "../dialogs/DeleteDialog";
import EncourageDialog from "../dialogs/EncourageDialog";
import BanDialog from "../dialogs/BanDialog";

const UserInList: React.FC<SingleUserProp> = ({ user, inPositive }) => {
  //TODO change component name
  const dispatch = useDispatch();

  const handleClick = (ratingChange: number): void => {
    if (ratingChange > 0 && user.rating >= 5) return;
    if (ratingChange < 0 && user.rating <= -5) return;

    dispatch(
      changeRating({
        userId: user.id,
        isInPositive: inPositive,
        ratingChange: ratingChange,
      }),
    );
  };

  return (
    <>
      <EncourageDialog inPositive={inPositive} user={user} />
      <BanDialog user={user} inPositive={inPositive} />
      <Box className="ban-dialog-box">
        <Box
          style={{
            padding: "0 20px",
          }}
        >
          <Box>
            <img style={{ width: "100%" }} src={user.avatar} alt={user.first_name + "'s image"} />
          </Box>
          <h4>
            {" "}
            {user.first_name} {user.last_name}
          </h4>

          <strong>
            <p>Rating: {user.rating}</p>
          </strong>
        </Box>

        <ButtonGroup
          orientation={"vertical"}
          variant="outlined"
          style={{
            minWidth: 64,
          }}
        >
          <Button onClick={() => handleClick(1)}> + </Button>
          <Button onClick={() => handleClick(-1)}> - </Button>

          {user.rating === 0 && <DeleteDialog inPositive={inPositive} user={user} />}
        </ButtonGroup>

        <Divider />
      </Box>
    </>
  );
};

export default UserInList;
