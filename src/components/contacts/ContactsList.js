import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Contacts.module.css';
import ContactsItem from './contactsItem/ContactsItem';
import { deleteContactOperations } from '../../redux/contacts/contactsOperations';
import FormContacts from '../formContacts/FormContacts';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const ContactsList = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({});
    const [isEditeFormOpen, setEditFormOpen] = useState(false);

    const contacts = useSelector(contactsSelectors.contactsFilter);

    const onHandleDeleteContact = e => {
        const { id } = e.target;
        dispatch(deleteContactOperations(id));
    };

    const onHandleEditContact = e => {
        setEditFormOpen(true);
        const id = e.target.id;
        setData({ ...contacts.find(contact => contact.id === id) });
    };

    return (
        <>
            {isEditeFormOpen && <FormContacts data={data} isEdit={true} closeForm={setEditFormOpen} />}
            <TransitionGroup component="ul" className={styles.ul}>
                {contacts.map(({ name, number, id }) => (
                    <CSSTransition key={id} timeout={250} classNames={styles}>
                        <ContactsItem
                            key={id}
                            name={name}
                            number={number}
                            id={id}
                            onRemove={onHandleDeleteContact}
                            onEdit={onHandleEditContact}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    );
};

export default ContactsList;
