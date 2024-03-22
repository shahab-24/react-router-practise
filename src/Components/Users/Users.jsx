import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import '../Users/Users.css'

const Users = () => {
  const users = useLoaderData();
  
  return (
    
    <div>
      <div>
      <h3>Users:{users.length}</h3>
      </div>
      <div className="Users">
      {
        users.map(user => <User key={User.id} user={user}></User> )
       
      }
      </div>
      
      
      
      
    </div>
    
  );
};

export default Users;