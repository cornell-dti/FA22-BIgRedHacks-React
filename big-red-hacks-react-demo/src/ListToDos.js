import { useEffect, useState } from "react"
import { ListItem } from "./ListItem";

export const ListToDos = () => {
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);  
  
  useEffect(() =>{
    //call to get data
    setData([{id: 1, v: "todo 1"}, {id: 2, v: "todo 2"}])
    setLoading(false);
  },[]);

  const removeItem = (id) => {
    setData(data.filter((d) => d.id !== id))
  }
 
  if (loading){
    return <h1>loading ...</h1>;
  } else {
    return (
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
    )
    
    
  }
  
  
}
