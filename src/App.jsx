import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useUserStore } from "./store/userSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
Outlet


function App() {
  const {setId, setName, setEmail} = useUserStore();

  useEffect(() => {
   
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setId(user.id);
      setName(user.name);
      setEmail(user.email);
    }
  }, [setId, setName, setEmail]);



  return (
    <>
      <Navbar />
      {/* <LandingPage/> */}
      {/* <Profile/> */}
      {/* <Category/> */}
      <Outlet/>
      
      <Footer />

    </>
  )
}

export default App
