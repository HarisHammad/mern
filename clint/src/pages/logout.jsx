import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
export default function Logout() {
  const navigate = useNavigate();
  const {Logoutuser} =useContext(AuthContext)

  useEffect(() => {
    Logoutuser();
    setTimeout(()=>{
        navigate("/login")
    },0)
  }, [Logoutuser,navigate]);


}
