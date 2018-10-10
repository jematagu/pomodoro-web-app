/*
 *
 * reducers/session.JS
 *
 * Session information is stored here, this is, token & user info.
 *
 */

import { SESSION_DELETE, SESSION_RECOVER, SESSION_UPDATE } from '../constants';
import { getSession } from '../lib/localStorage';

const user = {};
const token = null;
const isLogged = user != null && token != null;

const initState = {
    user,
    token,
    isLogged
};

export default (state = initState, action) => {
    switch (action.type) {
        case SESSION_UPDATE:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isLogged: true
            };
        case SESSION_DELETE:
            return {
                ...initState
            };
        case SESSION_RECOVER:
            const savedSession = getSession();
            return savedSession ? {
                ...savedSession,
                isLogged: true
            } : state;
        default:
            return state;
    }
};
