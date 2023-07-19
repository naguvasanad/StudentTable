
import React from "react";


const Entry = (props) => {
   const handleOnClick = () =>{
     let name1=document.getElementById("name").value;
     let fees1=document.getElementById("fees").value;
     let obj={
        name: name1,
        fees: fees1,
        dob: Date.now,
     }
     props.callback(obj);
   }

    return(
        <div className="entry">
     <label>Name:</label> 
     <input type="text" id="name"/>
     <label>FEES:</label>
     <input type="text" id="fees"/>
     <button onClick={handleOnClick}>SAVE</button>
     </div>
    );
}

export default Entry;