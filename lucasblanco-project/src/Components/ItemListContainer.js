import ItemCount from './ItemCount'
import ItemList from './ItemList'

    const greeting = 'Segunda entrega, espero que esto este bien :D'


const ItemListContainer = () => {
    

  return (
      <div>
        <ItemCount/>
          {greeting}
        <ItemList/>
      </div>
  )
}
export default ItemListContainer
