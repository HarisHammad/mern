import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/authContext";
import { toast } from "react-toastify";
export default function Login (){
  const {storetokeninLS} = useContext(AuthContext)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };







  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(user);
    try {
    const response =  await fetch("http://localhost:1000/oye/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    })
    console.log('Login',response);

    const res_data = await response.json()
    console.log('logiiin server data token',res_data.extraDetail);

    if (response.ok){
      
      storetokeninLS(res_data.token)
      toast.success("Login successful")
      setUser({    
    email: "",
    password: "",
      })
      
      navigate('/')
     }else{
      console.log('invalide something');
     toast.error(res_data.extraDetail?res_data.extraDetail:res_data.message)
     }
  } catch (error) {
      console.log(error);
      
  }
   
  





  
  };
 //  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/login.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                 Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};