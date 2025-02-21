import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./store/authContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminupdateContacts ()  {
    const params = useParams()
    const {AuthorizationToken}=useContext(AuthContext)
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });



  const getContactdatabyid =async()=>{
    try {
   
    const response = await fetch(`http://localhost:1000/admin/contacts/${params.id}/edit`,{
        method:"GET",
        headers:{Authorization: AuthorizationToken}
    }
    )
    const data =await response.json();
    console.log(data);
    setContact(data)
         
} catch (error) {
        console.log(error);
        
}
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
 
    try {
        const response = await fetch(`http://localhost:1000/admin/contacts/update/${params.id}`,{
            method:"PATCH",
            headers:{Authorization: AuthorizationToken,
                "Content-Type":"application/json"},
                body:JSON.stringify(contact)
        })
        if(response.ok){
toast.success('data update')
        }else{
            toast.error("data not update")
        }
     
    } catch (error) {
        console.log(error);
        
    }
  };


useEffect(()=>{
    getContactdatabyid()
},[])
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update Contact data</h1>
        </div>
       
        <div className="container grid grid-two-cols">
          <div className="contact-img">
         
          </div>          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};