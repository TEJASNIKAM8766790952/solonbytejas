import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import product1 from '../Image/Product1.jpg';
import product2 from '../Image/product2.jpg';
import product3 from '../Image/product11.jpg';
import product4 from '../Image/product4.jpg';
import product5 from '../Image/product5.jpg';
import product6 from '../Image/product6.jpg';
import product7 from '../Image/product9.jpg';
import product8 from '../Image/Product21.jpg';
import './ShopProducts.css';

const groomingProducts = [
  {
    name: 'Men’s Shampoo',
    image: product1,
    rating: 4,
    description: 'Daily shampoo with a refreshing mint scent. Perfect for normal to oily hair, it gently cleanses while invigorating the scalp. Enjoy a fresh, clean feeling all day long.',
    benefits: 'Cleanses hair, promotes scalp health.',
    amount: '250ml',
    type: 'Shampoo',
    color: 'Clear',
  },
  {
    name: 'Beard Oil',
    image: product2,
    rating: 5,
    description: 'Nourishing beard oil enriched with argan oil and vitamin E. It softens and conditions your beard while promoting healthy growth. A few drops keep your beard looking sharp and well-groomed.',
    benefits: 'Moisturizes beard, promotes growth.',
    amount: '30ml',
    type: 'Oil',
    color: 'Golden',
  },
  {
    name: 'Hair Pomade',
    image: product3,
    rating: 4,
    description: 'Strong hold hair pomade designed for perfect styling. It provides a matte finish and long-lasting hold, ensuring your hair stays in place all day. Ideal for classic and modern hairstyles.',
    benefits: 'Provides strong hold and shine.',
    amount: '100g',
    type: 'Pomade',
    color: 'Transparent',
  },
  {
    name: 'Hair Styling Gel',
    image: product4,
    rating: 5,
    description: 'Extra hold hair gel for long-lasting style. Its unique formula provides maximum hold and shine without flaking. Perfect for any hair type, it keeps your hairstyle intact from morning to night.',
    benefits: 'Keeps hair in place all day.',
    amount: '200ml',
    type: 'Gel',
    color: 'Clear',
  },
  {
    name: 'Face Wash for Men',
    image: product5,
    rating: 4,
    description: 'Deep-cleansing face wash formulated for oily skin. It removes impurities and excess oil, leaving your skin feeling fresh and rejuvenated. Suitable for daily use to prevent breakouts.',
    benefits: 'Removes impurities, prevents breakouts.',
    amount: '150ml',
    type: 'Face Wash',
    color: 'White',
  },
  {
    name: 'Aftershave Balm',
    image: product6,
    rating: 3,
    description: 'Soothing aftershave balm designed to reduce irritation. It calms and hydrates the skin after shaving, leaving it feeling soft and refreshed. Perfect for all skin types to soothe any shaving discomfort.',
    benefits: 'Calms skin after shaving.',
    amount: '100ml',
    type: 'Balm',
    color: 'White',
  },
  {
    name: 'Shaving Cream',
    image: product7,
    rating: 5,
    description: 'Luxury shaving cream infused with aloe vera for a smooth shave. It provides a rich lather that ensures a comfortable glide of the razor. Ideal for sensitive skin, it minimizes irritation and enhances your shaving experience.',
    benefits: 'Provides a smooth glide for razors.',
    amount: '150ml',
    type: 'Cream',
    color: 'White',
  },
  {
    name: 'Body Wash',
    image: product8,
    rating: 4,
    description: 'Invigorating body wash with tea tree oil for a refreshing clean. It cleanses the skin while providing a soothing sensation, perfect for daily use. Feel revitalized and energized after every shower.',
    benefits: 'Cleanses and refreshes skin.',
    amount: '250ml',
    type: 'Body Wash',
    color: 'Green',
  },
];

const ShopProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop-products-page">
      <h1 className="shop-products-title">Shop Products</h1>

      <div className="product-list">
        {groomingProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">{product.name}</h3>
              </div>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-rating">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
            <button className="details-btn" onClick={() => handleViewDetails(product)}>
              VIEW DETAILS
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseDetails}>&times;</span>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p><strong>Description:</strong> {selectedProduct.description}</p>
            <p><strong>Benefits:</strong> {selectedProduct.benefits}</p>
            <p><strong>Amount:</strong> {selectedProduct.amount}</p>
            <p><strong>Type:</strong> {selectedProduct.type}</p>
            <p><strong>Color:</strong> {selectedProduct.color}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopProducts;
