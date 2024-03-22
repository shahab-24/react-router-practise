import { useLoaderData } from "react-router-dom";




const UserDetail = () => {
  const user = useLoaderData();

  const {name, website, phone} = user;

  const userStyle = {
    border: '2px solid purple',
    padding: '5px',
    borderRadius: '15px'
  
    
  }

  return (
    <div style={userStyle}>
      <h2> {name}</h2>
      <h4>Website: {website}</h4>
      <h5>Phone: {phone}</h5>
      
    </div>
  );
};

export default UserDetail;