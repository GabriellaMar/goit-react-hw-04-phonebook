import styles from './ContactList.module.css'
import PropTypes from 'prop-types';
export const ContactList = ({ filteredContacts, onDeleteContact }) => {
    return (
            <ul className={styles.contactList}>
                {filteredContacts.map(contact => (
                    <li className={styles.contactItem} key={contact.id}>{contact.name}: {contact.number}
                        <button type="button" className={styles.deleteContactBtn}
                            onClick={() => onDeleteContact(contact.id)}
                        >
                            Delete</button>
                    </li>
                ))}

            </ul>
    )
}
ContactList.propTypes ={
    filteredContacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}