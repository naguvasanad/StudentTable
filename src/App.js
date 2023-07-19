
import './App.css';
import Entry from './Entry';
import { useState } from 'react';



function App() {

  const [isNewButtonClicked,setIsNewButtonClicked] = useState(true);
  const [studentList, setStudentList]= useState([]);
  
  
 function callBackFromEntry(obj){
  
 setStudentList([...studentList,obj]);
setIsNewButtonClicked(!isNewButtonClicked);
 }

function handleOnSubmit(event){
  event.preventDefault();
  setIsNewButtonClicked(!isNewButtonClicked);
}
 

  return (
    
    <div className='main-table'>      
      <div>
        <form id="inp" onClick={(e)=>handleOnSubmit(e)}>
        <button type="submit" >ADD</button>
        <button type="submit" >Delete</button>
        </form>
     </div>
      <table>
        <thead>
        <tr>
        <th>NAME</th>
        <th>FEES</th>
        </tr>
        </thead>
    {studentList.map((obj)=> {
         return(
           <tr key={obj.id}> 
            <td>
            {obj.name}
            </td>
            <td>
              {obj.fees}
            </td>
           
           </tr> 
         );
    })
  }

</table>
<p>{!isNewButtonClicked?<Entry
 callback={callBackFromEntry}
/>:""}</p>
</div>
  );
}

export default App;
