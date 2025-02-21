import { useContext } from "react";
import { AuthContext } from "../store/authContext";
export default function Service() {
  const { service } = useContext(AuthContext);

  return (
    <div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {service &&(
      service.map((curr, index) => (
         <div className="card" key={index} style={{width:'300px',border:'1px solid white',padding:'10px'}}>
            <img src="images\login.png" alt="" width={'100px'}/>
            <h2>{curr.service}</h2>
            <p>{curr.description}</p>
            <p>{curr.price}</p>
         </div>
        ))
        )}
        </div>
    </div>
  );
}
