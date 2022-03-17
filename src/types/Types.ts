export type IPayloadType = SingleUser | SingleUser[]

export type InitialStateType = {
    users: SingleUser[];
    positiveRated: SingleUser[]
    negativeRated: SingleUser[]
    shouldRefresh: boolean
}

export type DefaultStateType = {
    users: InitialStateType
}

export type SingleUser = {
    first_name: string,
    last_name: string,
    id: string,
    avatar: string,
    rating: number

}


export enum ACTION_TYPES {
    FETCH_USERS,
    ADD_TO_CONFIG_LIST,
    CHANGE_RATING,
    REMOVE_TO_LEFT,
    REFRESH,
    FETCH_NEW_USERS,
    DELETE_USER


}

export type RatingChangePayloadType = {
    ratingChange: number,
    isInPositive: boolean,
    userId: string
}

export type SingleUserProp = {
    user: SingleUser,
    inPositive: boolean
}


export type DeleteDialogPropsType = {
    user: SingleUser,
    inPositive: boolean
}