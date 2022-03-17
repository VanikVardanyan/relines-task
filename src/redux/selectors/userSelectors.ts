import {DefaultStateType, SingleUser,} from "../../types/Types";

export const selectUsers = (state: DefaultStateType): SingleUser[] => {
    return state.users.users
}

export const positiveRated = (state: DefaultStateType) => state.users.positiveRated
export const negativeRated = (state: DefaultStateType) => state.users.negativeRated
export const shouldRefresh = (state: DefaultStateType) => state.users.shouldRefresh
