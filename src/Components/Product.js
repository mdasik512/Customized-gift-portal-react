import React from 'react';
import './Home.css'; // Importing the common CSS file

const ProductCategories = () => {
  const categories = [
    { id: 1, name: 'Birthday Gifts', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.EZHMM381xOUA2M0DA9pDXgHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Anniversary Gifts', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP._kDW3stniFjNrVZh-3oMygHaLH&pid=Api&P=0&h=180' },
    { id: 3, name: 'Corporate Gifts', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.wj4oZVLlXAKGNHb9oCYvuAHaLG&pid=Api&P=0&h=180' },
    // Add more categories as needed
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <img src={category.imageUrl} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
