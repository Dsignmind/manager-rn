import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);//test to see what actions are passing
    switch (action.type) {
        case EMAIL_CHANGED:
        //says return a new object with value of all state (...state)
        //and overwrite email value with current
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
        //because we are resetting all state except user, we can do as follows
            // return { ...state,
            //     user: action.payload,
            //     error: '',
            //     loading: false,
            //     email: '',
            //     password: ''
            // };
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed!', password: '', loading: false };
        default:
            return state;
    }
};
