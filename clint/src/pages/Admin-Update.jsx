import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
import { toast } from "react-toastify";
export default function Adminupdate(){
    const {AuthorizationToken}=useContext(AuthContext)
    const params = useParams()
   const [data, setdata] = useState({
     username: "",
     email: "",
    phone : "",
   }); 

   const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({
      ...data,
      [name]: value,
    });
  };




  const UpdateuserData=async()=>{
    try {
     const response = await fetch(`http://localhost:1000/admin/users/${params.id}/edit`,{
         method:'GET',
         headers:{Authorization:AuthorizationToken}
     })
     const data = await response.json();
     console.log(data);
     setdata(data)
    } catch (error) {
     console.log(error);
    }}




    const handlesubmit=async(e)=>{
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:1000/admin/users/update/${params.id}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json",
            Authorization:AuthorizationToken },
            body:JSON.stringify(data)
        })
        if(response.ok){
          toast.success('data update successfull')
        }
        else{
          toast.error('data not update')
        }
      } catch (error) {
        console.log(error);
        
      }
    }




    useEffect(()=>{
       UpdateuserData()
    },[])
   return (
     <>
       <section className="section-contact">
         <div className="contact-content container">
           <h1 className="main-heading">update user data</h1>
         </div>
        
         <div className="container grid grid-two-cols">
         
           <section className="section-form">
             <form onSubmit={handlesubmit} >
               <div>
                 <label htmlFor="username">username</label>
                 <input
                   type="text"
                   name="username"
                   id="username"
                   autoComplete="off"
                   value={data.username}
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
                   value={data.email}
                   onChange={handleInput}
                   required
                 />
               </div>
 
               <div>
                 <label htmlFor="phone">phone</label>
                 <input
                   name="phone"
                   id="phone"
                   autoComplete="off"
                   value={data.phone}
                   onChange={handleInput}
                   required
                   cols="30"
                   rows="6"
                 ></input>
               </div>
 
               <div>
                 <button type="submit">Update</button>
               </div>
             </form>
           </section>
         </div>
 
       </section>
     </>
   );
}