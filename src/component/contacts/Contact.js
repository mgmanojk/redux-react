import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom'
const Contact = ({ contact }) => {
    const { id, name, phone, email } = contact;
    return (

        <tr key={id}>
            <th><input type="checkbox" /></th>
            <td><Avatar className="mr-2" size="40" round={true} name={name} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <Link to={`/contacts/edit/${id}`} className="material-icons">edit</Link>
                <a href="#" className="material-icons">remove_circle</a>
            </td>

        </tr >

    )
}

export default Contact
