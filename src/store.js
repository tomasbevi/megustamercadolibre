import { createStore } from "redux";


//DEFINO EL ESTADO INICIAL DEL STORE
const initialState = {
    productos: [
    
    ]
}
//CREO EL REDUCER
const reducerProductos = (state = initialState , action) => {

    //DIF TIPOS DE ACCIONES 
    //ACCION PARA AGREGAR PRODUCTOS AL STORE
    if(action.type === "AGREGAR_PRODUCTO"){
        return{
            ...state,
            productos: state.productos.concat(action.producto)
        }
    }
    //ACCION PARA REMOVER PRODUCTOS DEL STORE 
    if(action.type === "REMOVER_PRODUCTO"){
        return{
            ...state,
            productos: state.productos.filter(p => p.id !== action.producto.id)
        }
    }


    return state


}

export default createStore(reducerProductos)