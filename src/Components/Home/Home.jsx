import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      
      <Header></Header>
      <h2>This is My WebSite</h2>
      {
        navigation.state === 'loading' ? 
        <p> loading....</p> :
        <Outlet></Outlet>
      }
      
      <Footer></Footer>
      
    </div>
  );
};

export default Home;