import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from "../../actions/contactAction";
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
function EditContact() {
    let { id } = useParams();
    // console.log(id)


    let history = useHistory()
    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contacts.contact);
    console.log("jhjk", contact)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email)
        }
        dispatch(getContact(id))
    }, [contact]);
    return (
        <div className="container card shadow">
            <h3>add contacts</h3>
            <form>
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

export default EditContact
