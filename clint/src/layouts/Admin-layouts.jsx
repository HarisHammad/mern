import { Outlet,NavLink,useNavigate} from "react-router-dom";
import { AuthContext } from "../store/authContext";
import { useContext } from "react";
export default function AdminLayouts(){
    const Navigate = useNavigate()
    const {user,isLoading}= useContext(AuthContext)

    if(isLoading){
        return <h1>Loading...................</h1>
    }

    if(!user.isAdmin){
       Navigate('/')
    }

    
    return(
        <>
        <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to={'/admin/user'}>users</NavLink></li>
                    <li><NavLink to={'/admin/contact'}>contact</NavLink></li>
                    <li><NavLink to={'/'}>home</NavLink></li>
                    <li><NavLink to={'/service'}>service</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
    )
}