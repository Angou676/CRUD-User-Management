import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
 

    //Delete
    const getDeleteContactId = (id)=>{
        props.getDeleteId(id)
    }


    const renderContactList = props.contacts.map((contact)=>{
        return(
            <div key={Math.random()}>
                     <ContactCard contact={contact} getDeleteContactIdAgain ={getDeleteContactId}/>
            </div>
        )
    })

    return (
        <div className="container-fluid">
            <div className='list-group mt-3  border border-dark text-center'>
                <h3 className='text-center text-success '>CONTACT LIST</h3>
                <Link to='/add'>
                    <button className='btn btn-info fw-bold'>Goto Add Contact</button>
                </Link>
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList
