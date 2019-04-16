import { call } from 'redux-saga/effects';

import * as sagas from './sagas';
import * as api from '../../api/users'; 

describe('Mock Function Sagas', () => {
    it('should mock functions and spyOn', () => {
        const gen = sagas.fetchUsers();
        const getUsersSpy = jest.spyOn(api, 'getUsers');

        expect(gen.next().value).toEqual(call(api.getUsers));
        expect(getUsersSpy).toHaveBeenCalledTimes(1);

    });
});