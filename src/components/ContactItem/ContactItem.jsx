
import PropTypes from "prop-types";
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, handleDelete }) => {
    return (
    
        <ContactItem key={id}>
            {/* {name}: {number} */}
            <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => handleDelete(id)}>
                Delete
            </button>
         </ContactItem>
    );
};


ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
   handleDelete: PropTypes.func,
}
