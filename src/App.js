import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/header'
import Productos from './components/lista'
import ProductosAfuera from './components/listaAfuera'

const App = () => (
    <Provider store={store}>
      <Header/>
        <Productos/>
        <ProductosAfuera/>
    
    </Provider>
  );


export default App;
