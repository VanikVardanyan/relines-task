import { ACTION_TYPES, InitialStateType, SingleUser } from "../types/Types";
import { isAlreadyExists } from "../helper";

const initialState: InitialStateType = {
  users: [],
  positiveRated: [],
  negativeRated: [],
  shouldRefresh: false,
};

export const UserReducer = (state = initialState, { type, payload }: { type: ACTION_TYPES; payload: any }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_USERS:
      return { ...state, users: payload };

    case ACTION_TYPES.ADD_TO_CONFIG_LIST:
      const usersWithoutActive = state.users.filter((user) => user.id !== payload.id);

      if (payload.rating > 0 && !isAlreadyExists(payload.id, state.positiveRated)) {
        return {
          ...state,
          users: usersWithoutActive,
          positiveRated: [...state.positiveRated, payload],
        };
      } else if (payload.rating <= 0 && !isAlreadyExists(payload.id, state.negativeRated)) {
        return { ...state, users: usersWithoutActive, negativeRated: [...state.negativeRated, payload] };
      }
      return { ...state, users: usersWithoutActive };

    case ACTION_TYPES.CHANGE_RATING: {
      let changedUsers: SingleUser[] = [];
      if (payload.isInPositive) {
        changedUsers = state.positiveRated.map((user) => {
          if (user.id === payload.userId) {
            user.rating += payload.ratingChange;
          }
          return user;
        });
        return { ...state, positiveRated: changedUsers };
      } else {
        changedUsers = state.negativeRated.map((user) => {
          if (user.id === payload.userId) {
            user.rating += payload.ratingChange;
          }
          return user;
        });
        return { ...state, negativeRated: changedUsers };
      }
    }

    case ACTION_TYPES.REMOVE_TO_LEFT:
      let changedUser: SingleUser[] = [];

      if (payload.inPositive) {
        changedUser = state.positiveRated.filter((user) => user.id !== payload.user.id);
        return { ...state, users: [...state.users, payload.user], positiveRated: changedUser };
      } else {
        changedUser = state.negativeRated.filter((user) => user.id !== payload.user.id);
        return { ...state, users: [...state.users, payload.user], negativeRated: changedUser };
      }

    case ACTION_TYPES.REFRESH:
      return {
        ...state,
        shouldRefresh: !state.shouldRefresh,
        negativeRated: [],
        positiveRated: [],
      };

    case ACTION_TYPES.FETCH_NEW_USERS:
      return { ...state, users: [...state.users, ...payload] };

    case ACTION_TYPES.DELETE_USER:
      let usersWithoutBlocked: SingleUser[] = [];

      if (payload.inPositive) {
        usersWithoutBlocked = state.positiveRated.filter((user) => user.id !== payload.id);
        return { ...state, positiveRated: usersWithoutBlocked };
      } else {
        return { ...state, negativeRated: usersWithoutBlocked };
      }

    default:
      return { ...state };
  }
};
