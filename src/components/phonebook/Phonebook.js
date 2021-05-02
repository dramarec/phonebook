import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from './Phonebook.module.css';

import { Empty, Used } from '../natification/Natification';
import FormContacts from '../formContacts/FormContacts';
import Layout from '../layout/Layout';
import ContactsList from '../contacts/ContactsList';
import FindContact from '../findContact/FindContact';
import { getContactOperations } from '../../redux/contacts/contactsOperations';

// selectors
import authSelectors from '../../redux/auth/authSelectors';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const Phonebook = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector(authSelectors.isAuth);
    const error = useSelector(contactsSelectors.error);
    const getContacts = useSelector(contactsSelectors.getContacts);
    const showUsedAlert = useSelector(contactsSelectors.showUsedAlert);
    const showEmptyAlert = useSelector(contactsSelectors.showEmptyAlert);

    useEffect(() => {
        if (isAuth) {
            dispatch(getContactOperations());
        }
    }, [dispatch, isAuth]);

    return (
        <>
            <Layout title="Phonebook">
                <FormContacts />
            </Layout>

            {getContacts.length > 1 && (
                <Layout title="Finder contacts">
                    <FindContact />
                </Layout>
            )}

            {getContacts.length > 0 && (
                <Layout title="My Contacts">
                    <ContactsList />
                </Layout>
            )}

            {(!error && getContacts.length > 0) || <Layout title="Phonebook is empty. Please add contact" />}

            <CSSTransition in={showEmptyAlert} timeout={250} classNames={styles} unmountOnExit>
                <Empty />
            </CSSTransition>

            <CSSTransition in={showUsedAlert} timeout={250} classNames={styles} unmountOnExit>
                <Used />
            </CSSTransition>
        </>
    );
};

export default Phonebook;
