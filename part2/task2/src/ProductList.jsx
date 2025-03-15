import React from 'react';
import ProductCard from './ProductCard';
import products from './products';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map(product => (
          <div className="product-grid-item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;