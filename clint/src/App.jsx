import {BrowserRouter,Route,Routes}from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Navbar from "./Components/Navbar";
import  Error  from "./pages/Error";
import Logout from "./pages/logout";
import { AuthProvider } from "./store/authContext";
import AdminLayouts from "./layouts/Admin-layouts";
import AdminUser from "./pages/AdminUser";
import AdminContact from "./pages/AdminContact";
import Adminupdate from "./pages/Admin-Update";
import AdminupdateContacts from "./Admin-updatecontact";
function App() {
  return <>
  <AuthProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/admin" element={<AdminLayouts/>}>
    <Route path="user" element={<AdminUser/>}/>
    <Route path="contact" element={<AdminContact/>}/>
    <Route path="users/:id/edit" element={<Adminupdate/>}/>
    <Route path="contacts/:id/edit" element={<AdminupdateContacts/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </AuthProvider>
  </>;
}

export default App;
