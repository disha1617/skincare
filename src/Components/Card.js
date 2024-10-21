import React from 'react';

const Card = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '100%', margin: '0', padding: '0' }}>
      {/* Image on the right side */}
      <img
        style={{
          height: '400px', // Rectangular size
          width: '50%',     // Takes up half the card width
          objectFit: 'cover',
        }}
        src='https://i.pinimg.com/enabled_hi/564x/13/14/6c/13146c62bf5a9b75a9c2fe21cc90635c.jpg'
        alt='Card'
      />
      
      {/* Text and button on the left side */}
      <div style={{ padding: '20px', width: '50%' }}>
        <h1 style={{ margin: '0 0 10px' }}>Cherish your skin,</h1>
        <h2 style={{ margin: '0 0 10px' }}>elevate your beauty</h2>
        <p>
        Embrace the journey to your best self with our curated selection of skincare and makeup. We believe that true beauty radiates from within, and our mission is to help you unlock your unique glow</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#D0CDD8', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer',fontWeight: 'bold' }}>
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Card;
