
import './App.css';
import Card from './Components/Card' ;
import axios from "axios";
import React,{useEffect,useState} from 'react'
function App() {

var constValue;
constValue = window.getEnvValue();
console.log(constValue);

const [apiData, setapiData] = useState([]);


useEffect(() => {
  axios.get(constValue.apiUrl)
  .then(function (response) {
    // handle success
    console.log(response);
    setapiData(response.data);
    console.log(apiData);
  })
  .catch(function (error) {
    // handle error
    //console.log(error);
  })
})


  return (
    <div className="App">
      <header className="App-header">
       {
        apiData.map((row)=>(
        
        
        <>
        <Card key="hello" />
        
        </>

        ))
       }
      
     </header>
    </div>
  );
}

export default App;
