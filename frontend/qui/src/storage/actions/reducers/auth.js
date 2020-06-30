import * as actionTypes from '../actionTypes.js';
import { updateObject } from './../utility';

const initailState = {
    token: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });

}

const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        token: action.token
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false
    });
}

const reducer = (state = initailState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action)
        default:
            return state;
    }
}
export default reducer;
