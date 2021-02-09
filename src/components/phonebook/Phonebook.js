import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Phonebook.module.css';
import { connect } from 'react-redux';
import { Empty, Used } from '../natification/Natification';

import Form from '../form/Form';
// import Header from '../header/Header';
import Layout from '../layout/Layout';
import ContactsList from '../contacts/ContactsList';
import FindContact from '../findContact/FindContact';

import contactsOperations from '../../redux/contacts/contactsOperations';
// import contactsSelectors from '../redux/contacts/contactsSelectors';

class Phonebook extends Component {
    componentDidMount() {
        this.props.onFetchContacts();
    }

    render() {
        return (
            <>
                <Layout title="Phonebook">
                    <Form />
                </Layout>

                {this.props.loading && <h2>Loading</h2>}
                {this.props.contacts.length > 1 && (
                    <Layout title="Finder contacts">
                        <FindContact />
                    </Layout>
                )}

                {this.props.contacts.length > 0 && (
                    <Layout title="My Contacts">
                        <ContactsList />
                    </Layout>
                )}

                <CSSTransition
                    in={this.props.showEmptyAlert}
                    timeout={250}
                    classNames={styles}
                    unmountOnExit
                >
                    <Empty />
                </CSSTransition>

                <CSSTransition
                    in={this.props.showUsedAlert}
                    timeout={250}
                    classNames={styles}
                    unmountOnExit
                >
                    <Used />
                </CSSTransition>
            </>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.reducerContacts.contacts,
    showUsedAlert: state.reducerContacts.showUsedAlert,
    showEmptyAlert: state.reducerContacts.showEmptyAlert,
    loading: state.reducerContacts.loading,
});

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
