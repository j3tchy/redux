import { ROUTES } from '../constants/routes';

export const getUsers = () => fetch(ROUTES.USERS)
    .then((response) => response.json());

// export const getUsersPost = userId => fetch(ROUTES.POST)
