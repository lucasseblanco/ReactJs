import CartWidget from "./CartWidget"

const NavBar = (props) => {

  //console.table(props.link)


  if (props.footer) {
    return (
      <nav className="nav" >
      <a href="#" className="nav__link" >{props.nombre}</a>
      <a href="#" className="nav__link" >Link 1</a>
      <a href="#" className="nav__link" >Link 2</a>
      <a href="#" className="nav__link" >Link 3</a>
      <a href="#" className="nav__link" >Link 4</a>
      </nav>
    )
  }
  else {
    return(
      <nav className="nav" >
      <a href="#" className="nav__link" >Link 2</a>
      <a href="#" className="nav__link" >Link 3</a>
      <a href="#" className="nav__link" >Link 4</a>
      <CartWidget/>
      </nav>
    )
  }
  
}
export default NavBar
