import { call, put, takeEvery } from 'redux-saga/effects';
import { onFetchUsersSucess } from './actions';
import { FETCH_USERS } from './events';

import { getUsers } from '../../api/users';

export function* fetchUsers() {
    try {
        const users = yield call(getUsers);
        yield put(onFetchUsersSucess(users));
    } catch (error) {
        console.error(error);
    }
}

export function* watchFetchUsers() {
    yield takeEvery(FETCH_USERS, fetchUsers);
}