import { createContext, useEffect, useState} from "react";
export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token,settoken]=useState(localStorage.getItem("token"))
    const [user,setuser]=useState('');
    const[service,setservice]=useState('')
    const[isLoading,setisLoading]=useState(true)
    const AuthorizationToken = `Bearer ${token}`


    function storetokeninLS(serverToken){
        settoken(serverToken)
      return  localStorage.setItem('token',serverToken)
    } 

    const Loggedin = !!token;

    function Logoutuser(){
        settoken("");
        return localStorage.removeItem('token')
    }

    const userAuthentication =async()=>{
       setisLoading(true)
        try {
            const response = await fetch("http://localhost:1000/oye/user",
                {method:'GET',
                    headers:{Authorization: AuthorizationToken}
                })
               


                if(response.ok){
                    const data = await response.json();

                    console.log(data.userData);
                    setuser(data.userData)
                    setisLoading(false)
                }else{
                    setisLoading(false)
                    console.log('error');
                    
                }



        } catch (error) {
            console.log('Frror Fetheing data');
            
        }
    }   



    const getServises = async()=>{
try {
    const response = await fetch('http://localhost:1000/oye/service',
        {method:'GET'},
    );

    if(response.ok){
        const data = await response.json()
        console.log(data.msg);
        setservice(data.msg)
    }
} catch (error) {
    console.log('Error From Services Frontenr',error);
    
}
    }

    useEffect(()=>{
        getServises()
        userAuthentication()
    },[])


    return(
        <AuthContext.Provider value={{storetokeninLS,Logoutuser,Loggedin,user,service, AuthorizationToken,isLoading}}>
            {children}
        </AuthContext.Provider>
    )
   
}