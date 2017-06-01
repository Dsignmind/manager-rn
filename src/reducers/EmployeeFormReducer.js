import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        //square brackets are NOT ARRAY but key interpolation
        //whose values will be determined at run time
         return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
