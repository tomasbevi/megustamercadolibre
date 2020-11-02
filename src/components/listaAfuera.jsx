import React , {useState , useEffect} from "react"
import { connect } from "react-redux"

import './listaAfuera.css'

const ProductosAfuera = ({agregarProducto}) => {

const ref = React.createRef();

const [busqueda , setBusqueda] = useState(null);
const [productosML , setproductosML] = useState(null);


useEffect(() => {
    obtenerdatos()
  }, [busqueda])

const obtenerdatos = async () => {
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q='+busqueda)
    const lista = await data.json()
    setproductosML(lista['results']);
  }

 
    if(productosML){
    return(
        <section className="sectionlistaAfuera">
            <h2>Busca en Mercado Libre!</h2>
            <div className="divinput">
                <input placeholder="ej: bicicletas, pc gamer, remeras, etc.." ref={ref} onKeyUp={() => setBusqueda(ref.current.value)}></input>
            </div>
            <div className="contentArticle">
            {
            productosML.map(p => (
                <article key={p.id}>
                    <img alt={p.title} title={p.title} src={p.thumbnail} />
                    <h5 title={p.title} alt={p.title}>{p.title}</h5>
                    <span>${p.price}</span>
                    <a className="boton" title="Agregar a la lista" onClick={()=> agregarProducto(p)}>Agregar</a>
                    <a className="boton" title="Ver detalles del producto en ML" target="_blank" href={p.permalink}>Ver + </a>
                </article>
            ))
            }
            </div>
        </section>
        )
    }else{
        return(
            <p>Cargando...</p>
        )
    }
}

const mapStateToProps = (state => ({
    productos: state.productos
}))

const mapDispatchToProps = (dispatch => ({

        agregarProducto(producto){
                dispatch({
                    type: 'AGREGAR_PRODUCTO',
                    producto
                })
        }

}))

export default connect(mapStateToProps , mapDispatchToProps)(ProductosAfuera)