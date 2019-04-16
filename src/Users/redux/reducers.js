import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
} from './events';

const initialState = {
    users: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
            }

        default:
            return state
    }
}