import { call, put, takeEvery } from 'redux-saga/effects';
import { onFetchUsersSucess } from './actions';
import { FETCH_USERS } from './events';

import { getUsers } from '../../api/users';

function* fetchUsers() {
    try {
        const users = yield call(getUsers);
        yield put(onFetchUsersSucess(users));
    } catch (error) {
        console.error(error);
    }
}

function* mySaga() {
    yield takeEvery(FETCH_USERS, fetchUsers);
}

export default mySaga;