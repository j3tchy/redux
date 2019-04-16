const SLUGS = {
    POSTS: 'posts',
    USERS: 'users',
    USER_ID: ':userId'
}

const BASE = 'https://jsonplaceholder.typicode.com';

export const ROUTES = {
    POST: `${BASE}?userId=${SLUGS.USER_ID}`,
    USERS: `${BASE}/${SLUGS.USERS}`
}