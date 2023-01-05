import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={css.wraperContactList}>
    <ul className={css.contactList}>
      {contacts.map(({ name, id, number }) => (
        <ContactItem
          key={id} 
           id={id}
            name={name}
            number={number}
          handleDelete={handleDelete}
          
        />
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};