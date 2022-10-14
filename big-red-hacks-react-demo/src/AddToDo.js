import { useState } from "react"

export const AddToDo = ({addData}) => {

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleTextChange}/>
      <button onClick={() => addData(text)} type="submit"> Add Item</button>
    </div>
  )
}
