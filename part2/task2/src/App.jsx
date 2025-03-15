import React from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Магазин уникальных товаров</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;