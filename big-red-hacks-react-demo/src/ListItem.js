export const ListItem = ({data, removeItem}) => {
  return (
    <tr>
      <td style={{color: "red"}}>
        {data.id}
      </td>
      <td>
        {data.v}
      </td>
      <td>
        <button onClick={() => removeItem(data.id)} type="submit"> Remove</button>
      </td>
    </tr>
  )
}
