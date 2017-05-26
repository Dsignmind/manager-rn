import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case EMAIL_CHANGED:
            //says return a new object with value of all state (...state)
            //and overwrite email value with current
                return { ...state, email: action.payload };
            case PASSWORD_CHANGED:
                return { ...state, password: action.payload };
            default:
                return state;
        }
};
