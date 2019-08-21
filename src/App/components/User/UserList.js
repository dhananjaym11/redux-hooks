import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';

export default function UserList(props) {
    return (
        <Row>
            {props.list.map((user) => (
                <Col xs="3" key={user.login}>
                    <Link to={`users/${user.login}`}>
                        {user.login}
                    </Link>
                </Col>
            ))}
        </Row>
    )
};