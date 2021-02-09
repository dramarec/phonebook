import React from 'react';
import Container from '../../components/layout/container/Container';
import Phonebook from '../../components/phonebook/Phonebook';

import style from './ContactsPage.module.css';

const Contacts = () => {
    return (
        <Container className={style.phonebook} title="Phonebook">
            <Phonebook />
        </Container>
    );
};

export default Contacts;
