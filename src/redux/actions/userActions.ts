import {ACTION_TYPES, RatingChangePayloadType, SingleUser} from "../../types/Types";


export const fetchUsers = (userData: SingleUser[]) => ({
    type: ACTION_TYPES.FETCH_USERS,
    payload: userData
})

export const addToConfigList = (user: SingleUser) => ({
    type: ACTION_TYPES.ADD_TO_CONFIG_LIST,
    payload: user
})


export const changeRating = (ratingChange: RatingChangePayloadType) => ({
    type: ACTION_TYPES.CHANGE_RATING,
    payload: ratingChange
})

export const refresh = () => ({
    type: ACTION_TYPES.REFRESH,
})

export const fetchNewUsers = (newUsers: SingleUser[]) => ({
    type: ACTION_TYPES.FETCH_NEW_USERS,
    payload: newUsers
})


export const deleteUser = (id: string, inPositive: boolean) => ({
    type: ACTION_TYPES.DELETE_USER,
    payload: {
        id, inPositive
    }
})


export const removeToMainList = (user: SingleUser, inPositive: boolean) => {
    return {
        type: ACTION_TYPES.REMOVE_TO_LEFT,
        payload: {
            user,
            inPositive
        }
    }
}