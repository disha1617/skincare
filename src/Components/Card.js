import React from 'react';

const Card = () => {
  const handleShopNow = () => {
    window.location.href = '/shop'; // Replace '/shop' with the URL or path you want to navigate to
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '100%', margin: '0', padding: '0' }}>
 
      <img
        style={{
          height: '400px', 
          width: '50%',    
          objectFit: 'cover',
        }}
        src='https://i.pinimg.com/enabled_hi/564x/13/14/6c/13146c62bf5a9b75a9c2fe21cc90635c.jpg'
        alt='Card'
      />
      

      <div style={{ padding: '20px', width: '50%' }}>
        <h1 style={{ margin: '0 0 10px' }}>Cherish your skin,</h1>
        <h2 style={{ margin: '0 0 10px' }}>Elevate your beauty</h2>
        <p>
          Embrace the journey to your best self with our curated selection of skincare and makeup. We believe that true beauty radiates from within, and our mission is to help you unlock your unique glow.
        </p>
        <button 
          style={{ padding: '10px 20px', backgroundColor: '#D0CDD8', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={handleShopNow}
        >
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Card;
