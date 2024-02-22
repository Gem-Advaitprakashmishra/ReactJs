import React from "react";
import Table from './Table';
const EmployeeDirectory = ({employeeData}) =>
{  
   
   return(
    <div> <h3>Employee Directory</h3>
    
    <hr></hr>
        <Table employeeData ={employeeData} />
    </div>
   );
}
export default EmployeeDirectory;