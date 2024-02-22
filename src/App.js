import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import VerSlider from './Component/VerSlider';
import { useState } from 'react';
import Mainscreen from './Component/Mainscreen';
import Data from "./data";
function App() {
  
  const [employeeData,SetEmployeeData] = useState(Data);
  const [showSlider, setShowSlider] = useState(true);
 
  const VerticalSlideBar = () =>{
    
    setShowSlider(!showSlider);
  }
    
  //  function  AddnewEmployee(formData)
  //  {debugger;
  //   const newEmp = Data.push(formData)
  //   SetEmployeeData(newEmp);
  //  }

  return (
    <div>
      <Header VerticalSlideBar ={VerticalSlideBar} />
      <div className='row'>
        <div className='col-md-2'>
        {showSlider ? <VerSlider /> : false }     
        </div >
         <div className='col-md-10'><Mainscreen employeeData={employeeData}  /></div>
            
      </div>
     
    </div>
  );
}

export default App;
