import { useState } from "react"

const Item = () => {

    function Item(){
      const [productos, setProductos] = useState([
        {id: 1, nombre: 'Shortboard'},
        {id: 2, nombre: 'Longboard'},
      ])
    

  return (<ul>
    {productos.map(u=> <li key={u.id}>{u.name}</li>)}
  </ul>
    
  )
}
}
export default Item