import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../actionTypes/user'

const inititalState = {
    token: localStorage.getItem("token"),
    isAthenticated: null,
    isLoading: false,
    user: null,

}

export const authReducer = (state = inititalState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOADED:
            return {
                ...state,
                isAthenticated: true,
                isLoading: false,
                user: action.payload,
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAthenticated: true,
                isLoading: false,

            }
        case LOGOUT_SUCCESS:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                token: null,
                user: null,
                isAthenticated: null,
                isLoading: null,
            }
         default:
            return state;

    }

};