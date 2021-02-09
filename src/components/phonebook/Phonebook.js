import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from './Phonebook.module.css';
import { Empty, Used } from '../natification/Natification';

import Form from '../form/Form';
// import Header from '../header/Header';
import Section from '../section/Section';
import Layout from '../layout/Layout';

import ContactsList from '../contacts/ContactsList';
import FindContact from '../findContact/FindContact';
import { getContactOperations } from '../../redux/contacts/contactOperations';

const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContactOperations());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const contacts = useSelector(state => state.reducerContacts.contacts);
    const showUsedAlert = useSelector(
        state => state.reducerContacts.showUsedAlert,
    );
    const showEmptyAlert = useSelector(
        state => state.reducerContacts.showEmptyAlert,
    );
    return (
        <>
            {/* <CSSTransition
                in={true}
                appear={true}
                classNames={styles}
                timeout={500}
                unmountOnExit
            >
                <Header title="Home Work Phonebook" />
            </CSSTransition> */}

            <Layout title="Phonebook">
                <Form />
            </Layout>

            {contacts.length > 1 && (
                <Layout title="Finder contacts">
                    <FindContact />
                </Layout>
            )}

            {contacts.length > 0 || (
                <Layout title="Phonebook is empty. Please add contact" />
            )}
            {contacts.length > 0 && (
                <Layout title="My Contacts">
                    <ContactsList />
                </Layout>
            )}

            <CSSTransition
                in={showEmptyAlert}
                timeout={250}
                classNames={styles}
                unmountOnExit
            >
                <Empty />
            </CSSTransition>

            <CSSTransition
                in={showUsedAlert}
                timeout={250}
                classNames={styles}
                unmountOnExit
            >
                <Used />
            </CSSTransition>
        </>
    );
};

export default Phonebook;
