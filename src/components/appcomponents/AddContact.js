import React, { useState } from 'react'
import { Link,useHistory} from 'react-router-dom';


const AddContact = (props) => {
    //console.log(props)
    const history = useHistory();

    
    const [state,setState]=useState({
        names:"",
        email:"",
        phno:"",
        username:"",
        password:"",
    });
    
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})//...state is storing the first change data
    }

    const add =async (e)=>{
        e.preventDefault();

        if(state.names === "" || state.email === "" || state.phno === "" || state.username === "" || state.password === ""){
            alert("All field are mandatory")
        }
        else{
        const data=  {
            names:state.names,
            email:state.email,
            phno:state.phno,
            username:state.username,
            password:state.password
        }
        
        //console.log(data)
        // console.log(contactData)
        props.addContactHandler(data)
        
        e.target.reset();//resetting the form fields
        //props.history.push('/');
        history.push('/')
        

    }
    
    }
    return (
       <article>
           <section className='border border-dark'>
               <h2 className='text-center'>ADD CONTACT</h2>

               <form onSubmit={add}> 
                   <div className='form-group'>
                       <label>Name</label>
                       <input type='text' className="form-control" placeholder='Enter Name' name='names' onChange={handleChange}/>
                   </div>
                   <div className='form-group'>
                       <label>Email</label>
                       <input type='mail'className=" form-control" placeholder='Enter Email' name='email' onChange={handleChange}/>
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
                     
                            <button className='btn btn-primary mt-2 '>Add</button>
                   </div>
               </form>

               <Link to='/'>
                    <button>Goto View Contact</button>
               </Link>
           </section>
       </article>
    )
}

export default AddContact
