import React from 'react';

const Circle = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Our Pick for You</h2>
      <p>Radiate Beauty, Embrace You</p>

      {/* Circle container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '90px', // Increased gap between circles
          marginTop: '30px',
        }}
      >
        {/* Circle 1 */}
        <div style={{ textAlign: 'center' }}>
          <a href="/cleanser" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#D0CDD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                margin: '0 auto',
              }}
            >
              <img
                src="https://i.pinimg.com/enabled_hi/564x/65/ab/c6/65abc6f75fe9a934d4114e731762f20e.jpg"
                alt="Cleanser"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p style={{ marginTop: '10px' }}>Cleanser</p>
          </a>
        </div>

        {/* Circle 2 */}
        <div style={{ textAlign: 'center' }}>
          <a href="/moisturizer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#D0CDD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                margin: '0 auto',
              }}
            >
              <img
                src="https://i.pinimg.com/enabled_hi/564x/1e/4e/92/1e4e92787e4c6e65879563cd4fdb925b.jpg"
                alt="Moisturizer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p style={{ marginTop: '10px' }}>Moisturizer</p>
          </a>
        </div>

        {/* Circle 3 */}
        <div style={{ textAlign: 'center' }}>
          <a href="/serum" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#D0CDD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                margin: '0 auto',
              }}
            >
              <img
                src="https://i.pinimg.com/enabled_hi/564x/21/44/ac/2144ac77377d63ce5962fdd1b511a56f.jpg"
                alt="Serums"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p style={{ marginTop: '10px' }}>Serums</p>
          </a>
        </div>

        {/* Circle 4 */}
        <div style={{ textAlign: 'center' }}>
          <a href="/facemask" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#D0CDD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                margin: '0 auto',
              }}
            >
              <img
                src="https://i.pinimg.com/enabled_hi/564x/0f/4b/7a/0f4b7ad713abf0d6a9755db2258b02de.jpg"
                alt="Facemask"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p style={{ marginTop: '10px' }}>Facemask</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Circle;
