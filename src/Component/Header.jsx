import React from "react";
import { FaBars ,FaCaretDown} from "react-icons/fa";
import gemini from './gemini.png';
import { RiCheckboxLine } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header =({VerticalSlideBar} ) =>{
    
    return(
    <div>
        <div className ="headDash">  
        <div className ="header">
          < FaBars size={25} className="fabar" onClick={VerticalSlideBar}/>
          <img  className="image" src={gemini} alt='Company Logo'/>
          <div className="rightmodules">
          <p className="user"><FcBusinessman /> <FaCaretDown /></p>
          <button className="btn" style={{background:"#349fa2", color:"white"}}> Change Ad Password</button>
          <p className="apply"><RiCheckboxLine /> Apply <FaCaretDown /></p>
          <a className="content" href='' size={1}>EC DC HIERARCHY  </a>
          </div>
          </div>
        </div>
        
        <div>
            
        </div>

    </div>
    );
}
export default Header;