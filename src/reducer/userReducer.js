import {USER_LOGIN,LOGIN_FAIL,LOG_OUT} from '../action/Type'

export default (state=[],action)=>{
    switch (action.type) {
        case USER_LOGIN:
            localStorage.setItem('token',action.payload.token)
            return action.payload;
        case LOGIN_FAIL:
            return state.user_normal={user_normal:"user_normal"}
        case LOG_OUT:
            localStorage.removeItem('token')
            return state
        default:
            return state;
    }
}