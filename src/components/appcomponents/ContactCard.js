import React from 'react'
import { Link } from 'react-router-dom';
import user from '../../images/user.png'
const ContactCard = (props) => {
    
    const {id,names,email,phno}=props.contact;


    return (
          <div>
                    <ul className='list-group mb-3 border border-success'>
                    <li className='list-group-item text-center border border-success'><img className='rounded' src={user} alt="user" height='50px' width='60px'/></li>
                        <li className='list-group-item'>Name: {names}</li>
                        <li className='list-group-item'>Email: {email}</li>
                        <li className='list-group-item'>Ph No.: {phno}</li>
                        <li className='list-group-item d-flex justify-content-between'>
               
                           <button className='btn btn-danger' onClick={()=> props.getDeleteContactIdAgain(id)}>Delete</button>
 
                           <Link to={{pathname:`/edit`, state:{contact:props.contact}}}>
                                 <button className='btn btn-success'>Edit</button>
                           </Link>
                        </li>
                    </ul>
            </div>
    )
}

export default ContactCard
