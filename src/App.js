import React,{useState} from 'react';
import data from './data'
import Tours from './Components/Tours';
function App() {

const [toursdata,setTours] =  useState(data);

function RemoveCard(ids)
{ 
 const newData = toursdata.filter((tour)=> tour.id != ids);
  setTours(newData);
}
function refreshHandler()
{
   setTours(data);
}
if(toursdata.length==0)
{
  return(
    <div className='refresh'>
      <h1 >No Tours Left </h1>
      <button className="button" onClick={refreshHandler}>Refresh</button>
    </div>
  );
}
   

  return (
    <div>
    <Tours tourdata = {toursdata} RemoveCard = {RemoveCard} ></Tours>
    </div>
  );
}

export default App;
