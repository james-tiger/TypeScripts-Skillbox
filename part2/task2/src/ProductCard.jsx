import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, imageUrl } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-price">
          <span className="current-price">{price} ₽</span>
          {oldPrice && <span className="old-price">{oldPrice} ₽</span>}
        </div>
        <h3 className="product-name">{name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;