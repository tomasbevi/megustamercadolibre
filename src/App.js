import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Productos from './components/lista'
import ProductosAfuera from './components/listaAfuera'

const App = () => (
    <Provider store={store}>
    <div>
        <Productos/>
        <ProductosAfuera/>
    </div>
    </Provider>
  );


export default App;
