import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../store/authContext";
export default function Navbar() {
  const {Loggedin} = useContext(AuthContext);
  return (
    <header>
      <div className="container">
        <div className="logbrand">
          <NavLink to="/" className="nav-link">
            Haris
          </NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="nav-link">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            {Loggedin ? (
              <li>
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink to="/Register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
