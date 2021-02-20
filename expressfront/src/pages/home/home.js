import "./home.css";

import React, {useState, useEffect} from "react";
import Navbar from "../../components/navbar";


const Home = () => {
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    setTimeout(()=>{
      setTimer(timer + 1);
    }, 1000);
    
  }, [timer]);
  return (
    <div className={"contenairHome"}>
      <Navbar/>
      <h1>Home</h1>
      <h2>{timer}</h2>
    </div>
  );
};

export default Home;
