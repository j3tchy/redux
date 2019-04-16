import React, { Component } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// import UsersList from './UsersList';

const Wire = ({ children, ...props }) => {
  console.log(props);
  return children(props);
}

class Users extends Component {
    state = {
        user: null,
    }

    componentDidMount() {
        const { onFetchUsers } = this.props;
        onFetchUsers();
    }

    handleUserSelection = (event) => {
        this.setState({ user: event.target.value })
    }

    render() {
        const { users } = this.props;

        return (
            <RadioGroup
                value={this.state.user}
                onChange={this.handleUserSelection}
                name="gender">
                {users.map(user => (
                  <Wire value={user.id.toString()} key={user.id}>
                    {props => {
                      return (
                        <div>
                          <FormControlLabel
                            key={user.id}
                            control={<Radio />}
                            label={user.name}
                            {...props}
                          />
                            {user.id % 2 === 0
                              && <div>{`${user.name} Hi`}</div>}
                        </div>
                      )
                    }}
                  </Wire>
                ))}
            </RadioGroup>
        )
    }
}

export default Users;