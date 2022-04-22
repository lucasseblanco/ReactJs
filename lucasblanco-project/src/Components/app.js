import Header from "./Header"
import Footer from "./Footer"
import  Main  from "./Main"
import ItemListContainer from "./ItemListContainer"

/*  poner adentro del header despues.
<Main nombre='Rjdoasj'>
<p>
ALOJA HIJO DE MAIN
</p>
<p>
HOLA HIJO DE MAIN 2
</p>
</Main>*/

const App = (props) => {
    return (
        <>
        <Header/>
        <ItemListContainer  greeting='saludos mortales, les traigo rock'/>
        <Footer/>
        </>
    )
}


export default App

