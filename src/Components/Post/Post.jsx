import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
  const {id, title, body} = post;

  const navigate = useNavigate();
  const userStyle = {
    border: '2px solid purple',
    padding: '5px',
    borderRadius: '20px',
    margin: '10px'
  }

  const handleShowDetails = () => {
    navigate(`/post/${id}`)
  }
  return (
    <div style={userStyle}>
      <h4>post id: {id} </h4>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}><button>Show Details</button></Link>
      <button onClick={handleShowDetails}>click to see details</button>
    </div>
  );
};

export default Post;