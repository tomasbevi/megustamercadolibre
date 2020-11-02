import React  from "react"
import { connect } from "react-redux"


const Productos = ({productos, removerProducto}) => {

    return(
        <section>
            <h2>Esto es lo que quiero!</h2>
            <p>Arma tu lista de los productos que mas queres y compartila.</p>
            {
            productos.map(p => (
                <article key={p.id}>
                    <h5>{p.title}</h5>
                    <img alt={p.title} src={p.thumbnail} />
                    <p>${p.price}</p>
                    <button onClick={()=> removerProducto(p)}>Borrar</button>
                </article>
            ))
            }
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