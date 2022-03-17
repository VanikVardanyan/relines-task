import React, { useEffect } from "react";

import "./App.css";
import { API } from "./API/API";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/actions/userActions";
import { SingleUser } from "./types/Types";
import { Users } from "./components/users";
import UsersWithRating from "./components/usersWithRating";
import { Container } from "@material-ui/core";
import { INITIAL_USER_COUNT } from "./constants";
import { randomIntegers } from "./helper";
import { shouldRefresh } from "./redux/selectors/userSelectors";

const App: React.FC = () => {
  const shouldRefreshList = useSelector(shouldRefresh);

  const dispatch = useDispatch();

  useEffect(() => {
    API.get<any, { data: SingleUser[] }>(`/?size=${INITIAL_USER_COUNT}`)
      .then((res) => {
        const usersWithRating = res.data.map((user) => ({ ...user, rating: randomIntegers(-5, 5) }));
        dispatch(fetchUsers(usersWithRating));
      })
      .catch((e) => console.error(e));
  }, [shouldRefreshList, dispatch]);

  return (
    <div className="App">
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Users />
        <UsersWithRating />
      </Container>
    </div>
  );
};

export default App;
