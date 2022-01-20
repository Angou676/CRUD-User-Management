import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const EditContact = (props) => {

    // console.log(props.history)

     const {id,names,email}=props.location.state.contact;

     const [state,setState] = useState({
         id,
         names,
         email,
     })
    
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})//...state is storing the first change data
    }

    const update =async (e)=>{
        e.preventDefault();

        if(state.names === "" || state.email === "")
        {
            alert("All field are mandatory")
        }

        props.updateContactHandler(state);
        e.target.reset();//resetting the form fields
        props.history.push('/')
   
    
    }
    return (
       <article>
           <section className='border border-dark'>
               <h2 className='text-center'>EDIT CONTACT</h2>

               <form onSubmit={update}> 
                   <div className='form-group'>
                       <label>Name</label>
                       <input type='text' className="form-control" placeholder='Enter New Name' name='names' onChange={handleChange}/>
                   </div>
                   <div className='form-group'>
                       <label>Email</label>
                       <input type='mail'className=" form-control" placeholder='Enter New Email' name='email' onChange={handleChange}/>
                   </div>
                   <div className='form-group'>
                       <label>Mobile Number</label>
                       <input type='text'className=" form-control" placeholder='Enter Mobile Number' name='phno' onChange={handleChange}/>
                   </div>
                   <div className='form-group'>
                       <label>Username</label>
                       <input type='text'className=" form-control" placeholder='Enter Username' name='username' onChange={handleChange}/>
                   </div>
                   <div className='form-group'>
                       <label>Password</label>
                       <input type='password'className=" form-control" placeholder='Enter Password' name='password' onChange={handleChange}/>
                   </div>
                   <div className='form-group d-flex justify-content-center'>
                         <button className='btn btn-primary mt-2 '>Update</button>
                   </div>
               </form>
               <Link to='/'>
                    <button>Goto View Contact</button>
               </Link>
           </section>
       </article>
    )
}

export default EditContact
