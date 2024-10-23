import React from 'react';

const productsData = [
  {
    id: 1,
    name: 'Hydrating Face Cream',
    description: 'A luxurious face cream that provides intense hydration and nourishment to the skin.',
    price: '$25.99',
    image: 'https://via.placeholder.com/200', // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'Gentle Exfoliating Scrub',
    description: 'A gentle scrub that removes dead skin cells and promotes a brighter complexion.',
    price: '$19.99',
    image: 'https://via.placeholder.com/200', // Replace with actual image URLs
  },
  {
    id: 3,
    name: 'Soothing Aloe Vera Gel',
    description: 'A calming gel that soothes irritated skin and provides lasting hydration.',
    price: '$14.99',
    image: 'https://via.placeholder.com/200', // Replace with actual image URLs
  },
  {
    id: 4,
    name: 'Revitalizing Serum',
    description: 'An advanced serum that targets fine lines and enhances skin elasticity.',
    price: '$34.99',
    image: 'https://via.placeholder.com/200', // Replace with actual image URLs
  },
  {
    id: 5,
    name: 'Nourishing Body Lotion',
    description: 'A rich body lotion that hydrates and softens dry skin all day long.',
    price: '$22.99',
    image: 'https://via.placeholder.com/200', // Replace with actual image URLs
  },
];

const Products = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  };

  const productCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'left',
    backgroundColor: '#ffffff',
  };

  const productImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1>All Products</h1>
      <div style={productGridStyle}>
        {productsData.map((product) => (
          <div key={product.id} style={productCardStyle}>
            <img src={product.image} alt={product.name} style={productImageStyle} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: 'bold' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
