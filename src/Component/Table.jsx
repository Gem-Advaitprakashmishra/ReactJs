import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcPlus ,FcRight } from "react-icons/fc";
import Tooltip from 'react-bootstrap/Tooltip';
import { Modal, Button } from "react-bootstrap";
import User from './user.jpg';
const Table = ({employeeData}) =>{    
//    const {newEmpl} = AddnewEmployee;
   
     const[formData,setFormData] = useState({
        id:employeeData.length+1,
        EmployeeName:"",
        Designation:"",
        DC:"",
        MobileNumber:"",
        Extension:"",
        Location:"",
        Email:""
     })
     function modalDataHandler(event)
     {  const {name,value,type} = event.target;
        setFormData((prev) => ({...prev,[name]:value}))
     }
     function SaveData(event)
     {
        event.preventDefault();
        
        setModal2(false);
    
        //newEmpl(formData);
     }
    let modal ;
    const [modal2,setModal2] =  useState(false);
    const [data , setData]  = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        var  details  = 
         employeeData.filter((item) =>
            item.id == id
         )
        setData(details); 
        setShow(true);
        
    }
    function AddhandleShow()
    {
        setModal2(true);
        
    }
    function remhandleClose()
    {
        setModal2(false);
    }
    
    if(data.length == 0)
    { modal = 
         <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
             <Modal.Body><span>
                </span></Modal.Body>
            </Modal>
    }
    else{
        modal = <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       <Modal.Title>You are viewing {data[0].EmployeeName} Profile</Modal.Title>
       </Modal.Header>
      <Modal.Body>
        
      <span><img className="profileImage" src={User} alt="Image"></img></span>
      <div className="modalBody">
        <b> Employee Name</b> <FcRight />   <span>{data[0].EmployeeName}</span>
        <br></br>
        <b>Employee Designation</b> <FcRight /> <span>{data[0].Designation}</span>
        <br></br>
        <b>Delivery Council</b> <FcRight />  <span>{data[0].DC}</span>
           <br></br>
        <b>Mobile Number</b> <FcRight />  <span>{data[0].MobileNumber}</span>
        <br></br>
        <b>Extension Number</b> <FcRight />  <span>{data[0].Extension}</span>
        <br></br>
        <b>Location</b> <FcRight />   <span>{data[0].Location}</span>
        <br></br>
        <b>Email Id</b> <FcRight /> <span>{data[0].Email}</span>
      </div>
      </Modal.Body>
     </Modal>
    }
    return(
        <div>
           <Button variant="success" onClick={AddhandleShow} style={{margin:"5px"}}>Add new Employee</Button>
       <Modal className="modal" show={modal2} onHide={remhandleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Add new employee</Modal.Title>
  </Modal.Header>
  <Modal.Body><span><img  className="newImage" src={User} alt="Image"></img></span>
        <form onSubmit={SaveData}>
            <label ><b>EmployeeName</b> <FcRight  /></label>
            <input type="text" name="EmployeeName" id="EmployeName" value={formData.EmployeeName} onChange={modalDataHandler} className="FormInputs" placeholder="Advait..."  /><hr/>
            
            <label><b>Designation</b> <FcRight /></label>
            <input className="FormInputs" type="text"   name="Designation" id="Designation" value={formData.Designation} onChange={modalDataHandler} placeholder="Software Engineer L1..."/><hr/>
            
            <label><b>Delivery Council</b> <FcRight /></label>
            <input className="FormInputs" type="text" name="DC" id="DC" value={formData.DC} onChange={modalDataHandler} placeholder="PIMCO..." /><hr/>
           
            <label><b>Mobile Number</b><FcRight /></label>
            <input className="FormInputs" type="text"   name="MobileNumber" id="MobileNumber" value={formData.MobileNumber} onChange={modalDataHandler} placeholder="8888888888..."/><hr/>
            
            <label><b>Extension Number</b> <FcRight /></label>
            <input className="FormInputs" type="text" name="Extension" id="Extension" value={formData.Extension} onChange={modalDataHandler} placeholder="999..." /><hr/>
           
            <label><b>Location</b> <FcRight /></label>
            <input className="FormInputs" type="text" name="Location" id="Location" value={formData.Location}   onChange={modalDataHandler}  placeholder="Canaan Tower..."/><hr/>
            
            <label><b>Email Id</b> <FcRight /></label>
            <input className="FormInputs" type="text" name="Email" id="Email" value={formData.Email} onChange={modalDataHandler} placeholder="advait@Gemini.com..." /><hr/>
            
        </form>
  
  </Modal.Body>
  { <Modal.Footer className="footer">
    <Button variant="primary" onClick={SaveData}>
      Save Changes
    </Button>
  </Modal.Footer> }
</Modal>
            <div className="structure">  
     <table className="table table-striped table-bordered table-hover">
        <thead className="sticky" >
            <tr  >
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Delivery Council</th>
                <th>Mobile Number</th>
                <th>Extension</th>
                <th>Location</th>                           
                </tr>
         </thead>        
                <tbody>
                { employeeData.map((value)=>{
                    return (
                         <tr key={value.id} >
                    <td  ><span  ><FcPlus/></span><a className="empName" variant="primary" onClick={() =>{handleShow(value.id)}} >{value.EmployeeName}</a></td>
                    <td >{value.Designation}</td>
                    <td >{value.DC}</td>
                    <td >{value.MobileNumber}</td>
                    <td >{value.Extension}</td>
                    <td >{value.Location}</td>
                         </tr>
                    
                    )
                })
            }
                </tbody>
      
     </table>
     {modal}
     </div>
     </div>
    );
}
export default Table;