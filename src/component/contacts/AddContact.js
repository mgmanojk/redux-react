import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction'
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';
function AddContact() {
    let history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const createContact = (e) => {
        e.preventDefault();
        console.log(name, phone, email);

        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        console.log(new_contact)
        dispatch(addContact(new_contact));
        history.push('/')

    }
    return (
        <div className="container card shadow">
            <h3>add contacts</h3>
            <form onSubmit={(e) => createContact(e)}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="enter your name" />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Phone</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="Phone Number input" />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="Phone Number input" />
                </div>
                <button className="btn btn-success mb-2 ">Add </button>
            </form>
        </div>
    )
}

export default AddContact
