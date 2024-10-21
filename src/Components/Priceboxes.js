import React from 'react';

const Priceboxes = () => {
  const products = [
    {  
      price: "$10 - $15", 
      description: "A serum for brightening and radiance", 
      image: "https://i.pinimg.com/564x/99/d4/d3/99d4d39e47db653992058338629649fe.jpg"
    },
    { 
      price: "$19.99", 
      description: "For a hydrating, glowing complexion", 
      image: "https://i.pinimg.com/enabled_hi/564x/1e/4e/92/1e4e92787e4c6e65879563cd4fdb925b.jpg"
    },
    {  
      price: "$39.99", 
      description: "Gently renewing exfoliator", 
      image: "https://i.pinimg.com/564x/32/1e/a4/321ea4de72149864fcf0e1cec04ebcae.jpg"
    },
    { 
      price: "$49.99", 
      description: "Hydrating and revitalizing facial toner.", 
      image: "https://i.pinimg.com/564x/a1/98/d4/a198d44c664dacbe849b82d1144390c6.jpg"
    },
    { 
      price: "$24.99", 
      description: "A detoxifying and renewing face mask.", 
      image: "https://i.pinimg.com/564x/16/b3/94/16b394282cf2e2312c630396e8158758.jpg"
    },
    { 
      price: "$34.99", 
      description: "Revitalizing eye cream for a youthful look.", 
      image: "https://i.pinimg.com/564x/81/37/5f/81375f6738b606cca9e0cc7ac53ab08a.jpg"
    },
  ];

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ width: '100%', textAlign: 'center' }}>Best Sellers</h2>
      {/* First Row */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
        {products.slice(0, 3).map((product, index) => (
          <div key={index} style={{ width: '200px', margin: '0 10px' }}>
            <div
              style={{
                height: '250px', // Fixed height for the image box
                border: '2px solid #ccc',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '5px', // Space between image and description
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={product.image}
                alt={product.description}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <h3 style={{ fontSize: '16px', margin: '5px 0', textAlign: 'center' }}>{product.description}</h3>
            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{product.price}</p>
          </div>
        ))}
      </div>
      {/* Second Row */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {products.slice(3, 6).map((product, index) => (
          <div key={index} style={{ width: '200px', margin: '0 10px' }}>
            <div
              style={{
                height: '250px', // Fixed height for the image box
                border: '2px solid #ccc',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '0px', // Space between image and description
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={product.image}
                alt={product.description}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <h3 style={{ fontSize: '16px', margin: '5px 0', textAlign: 'center' }}>{product.description}</h3>
            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Priceboxes;
