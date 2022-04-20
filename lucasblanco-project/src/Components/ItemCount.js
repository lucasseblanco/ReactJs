import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const [stock, setStock] = useState(5)

    const handleClick = () => {
      setContador(contador + 1)
      setStock(stock-1)
      }

      const handleClickRest = () => {
        setContador(contador - 1)
        setStock(stock+1)
      }
      
      

      console.log(stock)

      //if (contador <= stock) {
        //handleClick()
      //}
        //else{
          //alert('No mas stock')
        //}


  if (stock != 0) {
  return (
    <div>
      <button onClick={handleClick} >click</button>
      <p>contador actual  {contador}</p>
      <button>Confirmar</button>
      <button onClick={handleClickRest} >click</button>
    </div>
  )
}
else{
  return(
  <div>NO HAY MAS STOCK</div>
  )
}
}
export default ItemCount
