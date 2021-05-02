import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContactOperations, editContactOperations } from '../../redux/contacts/contactsOperations';
import contactsActions from '../../redux/contacts/contactsActions';
import { NoticeError, Used, Empty } from '../natification/Natification';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const initialState = {
    name: '',
    number: '',
};

const FormContacts = ({ data = { ...initialState }, isEdit = false, closeForm }) => {
    const dispatch = useDispatch();

    const [state, setState] = useState({ ...data });
    const [usedAlert, setUsedAlert] = useState(false);
    const [emptyAlert, setEmptyAlert] = useState(false);

    const getContacts = useSelector(contactsSelectors.getContacts);
    const error = useSelector(contactsSelectors.error);
    const setLoading = useSelector(contactsSelectors.setLoading);

    useEffect(() => {
        if (usedAlert) {
            setTimeout(() => setUsedAlert(false), 2500);
        }
        if (emptyAlert) {
            setTimeout(() => setEmptyAlert(false), 2500);
        }
        setTimeout(() => {
            dispatch(contactsActions.setError(''));
        }, 2500);
    }, [usedAlert, emptyAlert, error, dispatch]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (getContacts.some(item => item.name === state.name) && !isEdit) {
            setUsedAlert(true);
            return;
        }
        if (!state.name && !state.getContacts) {
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
            {error && <NoticeError />}

            {usedAlert && <Used />}

            {emptyAlert && <Empty />}
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
                    <button className={styles.button} type="button" onClick={onClose}>
                        Close
                    </button>
                )}
            </form>
        </>
    );
};

export default FormContacts;
