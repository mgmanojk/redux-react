import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact';
function Contacts() {
    const contacts = useSelector((store) => store.contacts.contacts);
    console.log(contacts)
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-danger text-whight">
                    <tr>
                        <th scope="col">
                            <input type="checkbox" />
                        </th>
                        <th scope="col">name</th>
                        <th scope="col">phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => <Contact contact={contact} key={contact.id} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
