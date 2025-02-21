import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
import { Link } from "react-router-dom";

export default function AdminUser(){
    const[adminuser,setadminuser]=useState([]);
    const { AuthorizationToken}= useContext(AuthContext)
    
    const GetuserData = async()=>{
        try {
            const response = await fetch('http://localhost:1000/admin/users',{
                method:'GET',
                    headers:{Authorization: AuthorizationToken}
            })
            const data = await response.json()
            console.log(data);
            setadminuser(data)
            
        } catch (error) {
            console.log(error);
            
        }
    } 


    const userDataDelete=async(id)=>{
   try {
    const response = await fetch(`http://localhost:1000/admin/users/delete/${id}`,{
        method:'DELETE',
        headers:{Authorization:AuthorizationToken}
    })
    const data = await response.json();
    console.log(data);
    if(response.ok){
        GetuserData()
       }
   } catch (error) {
    console.log(error);
   }}



    useEffect(()=>{
GetuserData()
    },[])


    return(
        <>
        <table>
            <thead>
                <tr>
                <th>username</th>
                <th>email</th>
                <th>phone</th>
                <th>update</th>
                <th>delete</th>
                </tr>
            </thead>
            <tbody>
            {adminuser.map((curr,index)=>(
                <tr key={index}>
                    <td>{curr.username}</td>
                    <td>{curr.email}</td>
                    <td>{curr.phone}</td>
                    <td><Link to={`/admin/users/${curr._id}/edit`}>Edit</Link></td>
                    <td><button onClick={()=>userDataDelete(curr._id)}>delete</button></td>
                </tr>
 ) )}
            </tbody>
        </table>
 
        </>
    )
}