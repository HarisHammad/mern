import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/authContext";
import { Link } from "react-router-dom";

export default function AdminContact(){
    const [Contactdata,setContactdata]=useState([])
const {AuthorizationToken}=useContext(AuthContext)
    const allgetcontacts= async()=>{
        const response = await fetch('http://localhost:1000/admin/contacts',{
            method:"GET",
            headers:{Authorization: AuthorizationToken}
        })
        const data = await response.json();
        console.log(data);
        setContactdata(data)
    }

    const deleteContact = async(id)=>{
        const response = await fetch(`http://localhost:1000/admin/contacts/delete/${id}`,{
            method:'DELETE',
            headers:{Authorization:AuthorizationToken}  
        })
        if(response.ok){
            allgetcontacts()
        }

    }

    useEffect(()=>{
        allgetcontacts()
    },[])
    return(
        <>
        {Contactdata.map((curr,index)=>(
            <div key={index} style={{display:'flex',justifyContent:"space-evenly"}}>
            <p >{curr.username}</p>
            <p >{curr.message}</p>
            <p><Link to={`/admin/contacts/${curr._id}/edit`}>Edit</Link></p>
           <button onClick={()=>deleteContact(curr._id)}> delete</button>
            </div>
        ))}
        </>
    )
}