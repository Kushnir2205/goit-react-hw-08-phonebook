import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';

import { deleteContactThunk } from 'Redux/thunks';
import { selectFilteredContact } from 'Redux/selector';
import { useState } from 'react';
import { editContactThunk } from 'Redux/Contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContact);
  const [isEdit, stateIsEdit] = useState(false);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  const handleEdit = ({ id, name, number }) => {
    dispatch(editContactThunk(id, name, number));
  };
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {isEdit ? (
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
              <button onClick={() => handleEdit()}>Save</button>
            </form>
          ) : (
            <span>
              {contact.name}: {contact.number}
            </span>
          )}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
          <button onClick={() => stateIsEdit(true)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};
