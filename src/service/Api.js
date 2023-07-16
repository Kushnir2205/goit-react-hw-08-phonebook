import { instance } from './axios';

export const getContacts = async () => {
  const { data } = await instance.get('contacts');
  return data;
};
export const addContacts = async contact => {
  const { data } = await instance.post('contacts', contact);
  return data;
};
export const deleteContacts = id => instance.delete(`contacts/${id}`);
