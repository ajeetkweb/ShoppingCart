import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import {Provider} from 'react-redux'
import { store } from './Redux/store';
import ProductList from './components/productList'
import Cart from './components/Cart';

import Nav from './components/nav';
import Header from './components/header'
import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Router>
        <Header></Header>
        <Nav></Nav>
          <Routes>
            <Route path="/" element={<ProductList/>}></Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        
      </div>
    </Provider>
  );
}

export default App;
