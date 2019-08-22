import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'reactstrap';

import * as actions from '../../core/actions';
import Forms from '../../components/Forms/Forms';

export default function FormPage() {
    const personList = useSelector(state => state.formReducer.list);
    const dispatch = useDispatch();
    const updatePersons = useCallback(
        (personList) => dispatch(actions.updatePersons(personList)),
        [dispatch]
    )

    const onSaveClick = (personName, personAge) => {
        const lastMemberId = personList.length ? personList[personList.length - 1].id : 0;
        const obj = {
            id: lastMemberId + 1,
            name: personName,
            age: personAge
        }
        const updatedList = [...personList, obj];
        updatePersons(updatedList);
    }

    const handleDeletePerson = (id) => {
        const updatedList = personList.filter(person => person.id !== id);
        updatePersons(updatedList);
    }

    return (
        <Container>
            <h1>Form Page</h1>
            <Forms
                personList={personList}
                onSaveClick={onSaveClick}
                handleDeletePerson={handleDeletePerson}
            />
        </Container>
    )
}