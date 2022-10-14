import { useEffect, useState } from "react"
import { ListItem } from "./ListItem";
import { v4 as uuidv4 } from 'uuid';
import { AddToDo } from "./AddToDo";

export const ListToDos = () => {
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);  
  
  useEffect(() =>{
    //call to get data
    setData([{id: uuidv4(), v: "todo 1"}, {id: uuidv4(), v: "todo 2"}])
    setLoading(false);
  },[]);

  const removeItem = (id) => {
    setData(data.filter((d) => d.id !== id))
  }

  const addData = (d) => {
    setData([...data, {id:uuidv4(), v: d}])
    console.log([...data, {id:uuidv4(), v: d}])
  }


  if (loading){
    return <h1>loading ...</h1>;
  } else {
    return (

      <div>
        <AddToDo addData={addData}/>

        <table>
        <tr>
          <th>id</th>
          <th>todo</th>
          <th>Remove</th>
        </tr>
        {
          data.map((d) => (<ListItem data={d} removeItem={removeItem} />))
        }
      </table>
      </div>
      
    )
    
    
  }
  
  
}
