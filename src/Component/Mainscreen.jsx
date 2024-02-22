import React from "react";
import {Routes,Route } from 'react-router-dom';
import DashBoard from "./Dasboard";
import EmployeeDirectory from  "./EmployeeDirectory";
import TimeSheet from  "./TimeSheet";
import LeaveManagement from  "./LeaveManagement";
import LNSA from  "./LNSA";
import KnowledgeBase from  "./KnowledgeBase";
import Policy from  "./Policy";
import 'bootstrap/dist/css/bootstrap.min.css';

const Mainscreen =({employeeData}) =>{
   
 
 return(<div className="Container">


         <Routes>
            <Route path="/" element={<DashBoard employeeData={employeeData}/>}></Route>
            <Route path="/EmployeeDirectory"  element={<EmployeeDirectory employeeData={employeeData} />}></Route>
            <Route path="/TimeSheet" element={<TimeSheet/>}></Route>
            <Route path="/LeaveManagement" element={<LeaveManagement/>}></Route>
            <Route path="/LNSA" element={<LNSA/>}></Route>
            <Route path="/KnowledgeBase" element={<KnowledgeBase/>}></Route>
            <Route path="/Policy" element={<Policy/>}></Route>
        </Routes>
        
 </div>);
}
export default Mainscreen;