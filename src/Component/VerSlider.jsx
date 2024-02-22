import React from "react";
import { FaBars} from "react-icons/fa";
import DashBoard from "./Dasboard";
import EmployeeDirectory from  "./EmployeeDirectory";
import TimeSheet from  "./TimeSheet";
import LeaveManagement from  "./LeaveManagement";
import LNSA from  "./LNSA";
import KnowledgeBase from  "./KnowledgeBase";
import Policy from  "./Policy";
import { NavLink } from "react-router-dom";
import { FcDatabase,FcContacts,FcClock ,FcHome,FcRightUp,FcOpenedFolder,FcNews} from "react-icons/fc";

const VerSlider =() => {
    return (<div className="verSlider">
         
       <div  className="InsideSlider">
       <nav>
        <ul className="list">
        
            <li className="modules">
            <FcDatabase  size={25}/>
                <NavLink to='/' className="sidenav"> Dashboard</NavLink>
            </li>
            <li className="modules">
                <FcContacts size={25}/>
            <NavLink to='/EmployeeDirectory' className="sidenav"> EmployeeDirectory</NavLink>
            </li>
            <li className="modules">
                <FcClock size={25}/>
            <NavLink to='/TimeSheet' className="sidenav"> TimeSheet</NavLink>
            </li>
            <li className="modules">
                <FcHome size={25}/>
            <NavLink to='/LeaveManagement' className="sidenav"> LeaveManagement</NavLink>
            </li>
            <li className="modules">
                <FcRightUp size={25}/>
            <NavLink to='/LNSA' className="sidenav"> LNSA</NavLink>
            </li>
            <li className="modules">
                <FcOpenedFolder size={25}/>
            <NavLink to='/KnowledgeBase' className="sidenav"> KnowledgeBase</NavLink>
            </li>
            <li className="modules">
                <FcNews size={25}/>
            <NavLink to='/Policy' className="sidenav"> Policy</NavLink>
            </li>
        </ul>
      </nav>
        
         
       </div>
       
    </div>);
}

export default VerSlider;