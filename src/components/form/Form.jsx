import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from '../../redux/contacts/contactsActions';
import {
    addNewContactOperations,
    editContactOperations,
} from '../../redux/contacts/contactsOperations';

const initialState = {
    name: '',
    number: '',
};

const Form = ({ data = { ...initialState }, isEdit = false, closeForm }) => {
    const [state, setState] = useState({ ...data });

    const [usedAlert, setUsedAlert] = useState(false);
    const [emptyAlert, setEmptyAlert] = useState(false);

    const dispatch = useDispatch();

    const setLoading = useSelector(state => state.reducerContacts.loading);

    const contacts = useSelector(state => state.reducerContacts.contacts);

    useEffect(() => {
        if (usedAlert) {
            setTimeout(() => setUsedAlert(false), 2500);
        }
        if (emptyAlert) {
            setTimeout(() => setEmptyAlert(false), 2500);
        }
    }, [usedAlert, emptyAlert]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.some(item => item.name === state.name)) {
            setUsedAlert(true);
            return;
        }
        if (!state.name && !state.contacts) {
            setEmptyAlert(true);
            return;
        }
        if (isEdit) {
            closeForm(false);
            dispatch(editContactOperations(state));
        } else dispatch(addNewContactOperations(state));
        setState({ ...initialState });
    };
    const onClose = () => {
        closeForm(false);
    };

    return (
        <>
            {usedAlert && <h2>USED!!!</h2>}
            {emptyAlert && <h2>EMPTY!!!</h2>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Name"
                        value={state.name}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Number
                    <input
                        type="text"
                        name="number"
                        className={styles.input}
                        placeholder="Number"
                        value={state.number}
                        onChange={handleInputChange}
                    />
                </label>

                {setLoading ? (
                    <p className={styles.loading}>Loading...</p>
                ) : (
                    <button className={styles.button} type="submit">
                        {isEdit ? 'Edit Contact' : ' Add contact'}
                    </button>
                )}
                {isEdit && (
                    <button
                        className={styles.button}
                        type="button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                )}
            </form>
        </>
    );
};

export default Form;
