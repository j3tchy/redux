import { connect } from 'react-redux';

import {
    onFetchUsers
} from './redux/actions';

import Users from './Users';

const mapDispatchToProps = {
    onFetchUsers,
};

const mapStateToProps = state => state.Users;

export default connect(mapStateToProps, mapDispatchToProps)(Users);

