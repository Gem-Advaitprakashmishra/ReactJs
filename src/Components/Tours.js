import React from "react";
import Card from './Card'
function Tours({tourdata,RemoveCard})
{
    return (
        <div>
            <div className="Header"><h2 className="h2">Plan Trip With Advait </h2></div>
            <div className="Card">
                {
                    tourdata.map((tour)=>
                    { const value = {...tour}
                        return <Card key = {tour.id} RemoveCard = {RemoveCard} value ={value} ></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;