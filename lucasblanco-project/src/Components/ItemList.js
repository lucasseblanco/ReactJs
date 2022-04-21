import { useEffect, useState } from "react"
import Item from './Item'


const base = [
  {
    id: 1,
    nombre: "Shortboard",
    precio: 100
  },
  {
    id: 2,
    nombre: "Longboard",
    precio: 250
  },
  {
    id: 3,
    nombre: "SUP",
    precio: 350
  }
]

const ItemList = () =>{
  const [productos, setProductos] = useState([])

  useEffect(() => {

    //console.log("Pido productos...")
    const promesa = new Promise((res,rej)=>{
      res(base)
      //rej("Hubo un error")
    })

    .then((base)=>{
      setTimeout(() => {
      
        console.log("Recibo Productos!")
        setProductos(base)
      }, 2000) 
      console.log("Salio todo Bien")
    })
    .catch((error)=>{
      console.log("Salio todo Mal")
    })

  }, [])

  
  
  return(
    <div>
      <ul>
        {productos.map((producto)=>{
          //console.log(producto,indice)
          return <li key={producto.id} >{producto.nombre}</li>
        })}
      </ul>
      <Item/>
      </div>
  
  )
}


export default ItemList