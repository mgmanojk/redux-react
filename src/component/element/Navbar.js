import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar shadow fixed-top navbar navabar-expand-sm navbar-dark bg-primary">
            <div className="container">

                <Link to="/" className="navbar-brand" >Contack Book</Link>
                <div>
                    <Link to="/contacts/add" className="btn btn-light ml-auto" >Create Contact</Link>

                </div>
            </div>

        </nav>
    )
}

export default Navbar
