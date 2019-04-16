import React from 'react';

const UsersList = (props) => {
    const { users } = props;

    return (
        <ul>
            {users.map(user => {
                return (
                    <li key={user.id}>{user.name}</li>
                )
            })}
        </ul>
    )
}

export default UsersList;