import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'reactstrap';

import usersService from '../../core/services/users.service';
import UserList from '../../components/User/UserList';

export default function UsersPage() {
    const data = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    const loadUsers = useCallback(
        () => dispatch(usersService.loadUsers()),
        [dispatch]
    )

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <Container>
            <h1>Users Page</h1>
            {
                data.result ?
                    <UserList list={data.result} /> : null
            }
        </Container>
    )
}