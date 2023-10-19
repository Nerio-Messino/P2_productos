import { useState } from "react";
import Header from "./Header";
import './App.css';
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";
import SearchPage from "./SearchPage";


function App() {
const USE_SERVER = CONFIG.use_server;
const[resultado,setResultado]=useState();
const[error, setError] = useState();

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
        <div>
          <h3>Buscar producto</h3>
        </div>
        <div>
          <h3>Introducir parametros</h3>
        </div>
        <SearchPage/>
        
     </div>   
  );
}

export default App;
