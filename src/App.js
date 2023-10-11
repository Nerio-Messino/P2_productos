import { useState } from "react";
import Header from "./Header";
import './App.css';
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";

function App() {
const USE_SERVER = CONFIG.use_server;
const[resultado,setResultado]=useState("null");

const callServer = async () => {    
    if(USE_SERVER) {
      try {
        let queryparams = "";
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const data = await response.json();         
        
        if (response.status === 200){
          setResultado(data);
        }else{
         console.log("error");
        }
        
      } catch(error) {
        console.log(error);
        setResultado({ error: {description: error.message} });
      }
    } else {
      setResultado(mockdata);
    }
}

  return (
    <div className="App">
        <Header/>
     </div>   
  );
}

export default App;
