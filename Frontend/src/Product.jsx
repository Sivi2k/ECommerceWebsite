import React from "react";
const Productlist =()=>{
    const products=
    [
        {name:"sony",price:"333"},
        {name:"apple",price:"233"},
        {name:"xm4",price:"500"},
    ];
    return(
        <div>
            {products.map((key,index)=>(
             <div key={index}><h3>{key.name }</h3>
             <h5>price: ${key.price}</h5></div>
            ))}

        </div>

    );

}
export default Productlist;