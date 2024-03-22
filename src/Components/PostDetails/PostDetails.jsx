import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
  const postDetails = useLoaderData();
  const {id,title, body} = postDetails;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }

  const userStyle = {
    border: '2px solid purple',
    padding: '5px',
    borderRadius: '20px',
    margin: '10px'
  }
  return (
    <div style={userStyle}>
      <h3>id: {id}</h3>
      <h3>{title}</h3>
      <p><small>{body}</small></p>
      <button onClick={handleGoBack}>Go back</button>

    </div>
  );
};

export default PostDetails;