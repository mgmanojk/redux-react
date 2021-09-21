import { CREATE_CONTACT, GET_CONTACT } from '../constant/type'
//action
export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact
})

//get a contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})

