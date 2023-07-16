import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';

import { deleteContactThunk } from 'Redux/thunks';
import { selectFilteredContact } from 'Redux/selector';
import { useState } from 'react';
import { editContactThunk } from 'Redux/Contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContact);
  const [indexEdit, setIndexEdit] = useState(null);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  const setEdit = (id, name, number) => {
    setEditName(name);
    setEditNumber(number);
    setIndexEdit(id);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    setIndexEdit(null);
    dispatch(
      editContactThunk({
        id,
        name: editName,
        number: editNumber,
        contacts: filteredContacts,
      })
    );
  };
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {indexEdit === contact.id ? (
            <>
              <form>
                <input
                  type="text"
                  value={editName}
                  onChange={event => setEditName(event.target.value)}
                />
                <input
                  type="text"
                  value={editNumber}
                  onChange={event => setEditNumber(event.target.value)}
                />
              </form>
              <button onClick={e => handleEdit(e, contact.id)}>Save</button>
              <button onClick={() => setIndexEdit(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>
                {contact.name}: {contact.number}
              </span>
              <div>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
                <button
                  onClick={() =>
                    setEdit(contact.id, contact.name, contact.number)
                  }
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
