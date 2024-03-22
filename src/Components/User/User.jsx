import { Link } from "react-router-dom";
import Users from "../Users/Users";


const User = ({user}) => {
  const {id, name, email, phone} = user;
  
  const userStyle = {
    border: '2px solid purple',
    padding: '5px',
    borderRadius: '15px'
    
  }

  return (
    <div style={userStyle}>
       <h2>{name}</h2>
      
      <p>email:{email}</p>
      <p>phone:{phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;