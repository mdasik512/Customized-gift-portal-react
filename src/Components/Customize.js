import React from 'react';
import './Home.css'; // Importing the common CSS file

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Customized Mug', price: 'Rs.150', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.wMke4etcYQzNjVxJP93oywHaHZ&pid=Api&P=0&h=180',},
    { id: 2, name: 'Photo Frame', price: 'Rs.200', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.kvN5vPx2NJa874nmXj0WcgHaGz&pid=Api&P=0&h=180' },
    { id: 3, name: 'Personalized Keychain', price: 'Rs.80', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.p86n5RqOjcg87vK99QjwQQAAAA&pid=Api&P=0&h=180' },
    // Add more products as needed
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} /><button>Add to cart</button>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
