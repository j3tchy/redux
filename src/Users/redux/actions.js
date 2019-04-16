import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
} from './events';

export const onFetchUsers = () => ({ type: FETCH_USERS });

export const onFetchUsersSucess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
})