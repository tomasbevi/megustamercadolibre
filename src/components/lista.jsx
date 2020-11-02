import React  from "react"
import { connect } from "react-redux"

import './lista.css'

const Productos = ({productos, removerProducto}) => {


        return(
            <section className="sectionlista">
                <div className="contenttop">
                <h2>Esto es lo que quiero!</h2>
                <p>Buscá el producto que más deseas y arma tu lista de los productos que mas queres.</p>
                </div>
                <div className="contentArticle">
                {
                productos.map(p => (
                    <article key={p.id}>
                        <h5 title={p.title}>{p.title}</h5>
                        <span>${p.price}</span>
                        <img title={p.title} alt={p.title} src={p.thumbnail} />
                        <button onClick={()=> removerProducto(p)}>Borrar</button>
                    </article>
                ))
                }
                </div>
            </section>
            )
   

    return(
        <section className="sectionlista">
            <div className="contenttop">
            <h2>Esto es lo que quiero!</h2>
            <p>Arma tu lista de los productos que mas queres y compartila.</p>
            </div>
            <div className="contentArticle">
            {
            productos.map(p => (
                <article key={p.id}>
                    <h5 title={p.title}>{p.title}</h5>
                    <span>${p.price}</span>
                    <img title={p.title} alt={p.title} src={p.thumbnail} />
                    <button onClick={()=> removerProducto(p)}>Borrar</button>
                </article>
            ))
            }
            </div>
        </section>
        )
}

const mapStateToProps = (state => ({
    productos: state.productos
}))

const mapDispatchToProps = (dispatch => ({

    removerProducto(producto){
        dispatch({
            type: 'REMOVER_PRODUCTO',
            producto
        })
    }

}))

export default connect(mapStateToProps, mapDispatchToProps)(Productos)