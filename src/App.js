import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/headercomponents/Header';
import AddContact from './components/appcomponents/AddContact'
import ContactList from './components/appcomponents/ContactList'
import axios from 'axios'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import EditContact from './components/appcomponents/EditContact';

const App= ()=> {


  
  const [contacts,setContacts]=useState([]);
  const url=`http://localhost:3006/contact`;

    
  //Get the data from json-server-api
  useEffect(()=>{ 
    axios.get(url)
    .then(response=>{
        //console.log(response)
        setContacts(response.data);
    })
    .catch(()=>{
        console.log("Error")
    })
  },[url])


//Add the data to json-server-api
  // const addContact = (contact)=>{
  //   console.log(contact)
  //   setContacts([...contacts, contact])
  // }

  //Add
  const addContact = (data) => {
    //console.log(data)

    const contactData=JSON.stringify(data);//stringify is a method that converts a JavaScript object into a string

    axios.post(url,contactData,
        {
            headers:{"Content-Type" : "application/json"}//'application/json' is the modern content-type for JSON
                                                          // Content-Type: application/json => It indicates the request body format is JSON
        })
        .then(function(response) {
           setContacts([...contacts, response.data])//updating the state
            //console.log(response.data);
            //alert("New Data Added")
        })
        .catch(function(error) {
            console.log(error);
        })
     
        
  }


  //Delete
  const removeContact =async (id)=>{
    //console.log(id)
    await axios.delete(`http://localhost:3006/contact/${id}`);

    const newContactList = contacts.filter((contact)=>{
          return contact.id !== id;
    })
    setContacts(newContactList)
  }

  //Update
  const updateContact =async (contact)=>{
    await axios.put(`http://localhost:3006/contact/${contact.id}`,contact)
   
    //const response = await axios.put(`http://localhost:3006/contact/${contact.id}`,contact);
    //console.log(response.data)
     
  }

  return (
    <div className='container'>

      <Router>
        <Header/>
        <Switch>
            <Route path='/add' exact>
                  <AddContact  addContactHandler={addContact}/>
            </Route>

            <Route path='/' exact>
                <ContactList contacts={contacts}  getDeleteId = {removeContact}  getUpdateId={updateContact}/>
            </Route>

            <Route path='/edit' exact
                render={(props) => (
                  <EditContact {...props} updateContactHandler ={updateContact} />
                )}
            />
        </Switch>

      </Router>
     
     
    </div>
  );
}

export default App;
