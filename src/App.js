import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <Router basename="/ReactJSCart">
      <div className="App" style={{ padding: '20px' }}>
        <h1>Cart</h1>
        <div className="container">
          <div className="products-section">
            <ProductList addToCart={addToCart} />
          </div>
          <div className="cart-section">
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
