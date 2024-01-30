import React,{useState} from "react";
function Card({value,RemoveCard})
{     
    
    
    
    let  id =  `${value.id}`;
   //let  name  =`${value.name}`;//--
   let  info  = `${value.info}`; //--
   let  image = `${value.image}`;  //--
   let price = `${value.price}`; //--
   
    const[readMore, setReadmore] =useState(false);
   const desc = readMore ? info : `${info.substring(0,200)}....`;
   function clickHandler()
   { 
    if(readMore===true)
    {
    setReadmore(false);
    }
    else if(readMore===false)
    {
        setReadmore(true);
    }  
   }
 
    
    return( <div className="Cards">
        <img src ={image} alt = "Images" className="img"></img>
        <div>
            <h4 className="price">₹ {price}</h4>
            <h4 className="name"><b>{value.name}</b></h4>
        </div>
        <div>
            {desc}
            <span className="Read" onClick={clickHandler}>{ readMore ? "Show Less":"Read More"} </span>
        </div>
        
        <button className="button" onClick={()=>RemoveCard(id)}>Not Interested</button>
       
    </div>);

}
export default Card;