import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import * as actions from '../../core/actions';
import Forms from '../../components/Forms/Forms';

function FormPage(props) {
    const onSaveClick = (personName, personAge) => {
        const personList = props.personList;
        const lastMemberId = personList.length ? personList[personList.length - 1].id : 0;
        const obj = {
            id: lastMemberId + 1,
            name: personName,
            age: personAge
        }
        const updatedList = [...personList, obj];
        props.updatePersons(updatedList);
    }

    const handleDeletePerson = (id) => {
        const updatedList = props.personList.filter(person => person.id !== id);
        props.updatePersons(updatedList);
    }

    return (
        <Container>
            <h1>Form Page</h1>
            <Forms
                personList={props.personList}
                onSaveClick={onSaveClick}
                handleDeletePerson={handleDeletePerson}
            />
        </Container>
    )
}

const mapStateToProps = state => ({ personList: state.formReducer.list })

const mapDispatchToProps = (dispatch) => {
    return {
        updatePersons: (personList) => {
            dispatch(actions.updatePersons(personList))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);