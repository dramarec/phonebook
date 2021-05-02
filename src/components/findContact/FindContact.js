import React from 'react';
import styles from './Find.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const FindContact = () => {
    const dispatch = useDispatch();

    const filter = useSelector(contactsSelectors.getFilter);

    const onHandleChange = e => {
        const { value } = e.target;
        dispatch(contactsActions.setFilter(value));
    };

    return (
        <>
            <input
                type="text"
                className={styles.input}
                placeholder="Find contacts by name"
                value={filter}
                onChange={onHandleChange}
            />
        </>
    );
};

export default FindContact;

FindContact.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
};
