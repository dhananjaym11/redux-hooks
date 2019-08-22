import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import usersService from '../../core/services/users.service';
import UserList from '../../components/User/UserList';

function UsersPage(props) {

    useEffect(() => {
        props.loadUsers();
    }, []);

    return (
        <Container>
            <h1>Users Page</h1>
            {
                props.data.result ?
                    <UserList list={props.data.result} /> : null
            }
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: () => {
            dispatch(usersService.loadUsers())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.usersReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);