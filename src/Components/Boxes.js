import React from 'react';

const Boxes = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      {/* Box 1 */}
      <a
        href="/page1" // Replace with your actual path
        style={{
          width: '250px',
          height: '300px',
          cursor: 'pointer',
          overflow: 'hidden',
          border: '2px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 20px',
          transition: 'transform 0.3s',
          textDecoration: 'none', // Remove underline from links
          position: 'relative', // Position relative to allow absolute positioning of text
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img
          src='https://i.pinimg.com/enabled_hi/564x/d7/a8/64/d7a8641ac85ed9202774e108eba80444.jpg'
          alt="Box 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          bottom: '10px', // Position text at the bottom of the box
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          backgroundColor: 'transparent', // Semi-transparent background
          padding: '5px 10px', // Padding around the text
          borderRadius: '5px',
          color:'black',
          
        }}>
          Autumn Skincare
        </div>
      </a>

      {/* Box 2 */}
      <a
        href="/page2" // Replace with your actual path
        style={{
            width: '250px',
            height: '300px',
          cursor: 'pointer',
          overflow: 'hidden',
          border: '2px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 20px',
          transition: 'transform 0.3s',
          textDecoration: 'none',
          position: 'relative',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img
          src='https://i.pinimg.com/564x/f2/f0/c1/f2f0c1f6a35450d39aa6303642825957.jpg'
          alt="Box 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          backgroundColor: 'transparent',
          padding: '5px 10px',
          borderRadius: '5px',
          color:'black',
         
        }}>
          Anti-aging Cream
        </div>
      </a>

      {/* Box 3 */}
      <a
        href="/page3" // Replace with your actual path
        style={{
            width: '250px',
            height: '300px',
          cursor: 'pointer',
          overflow: 'hidden',
          border: '2px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 20px',
          transition: 'transform 0.3s',
          textDecoration: 'none',
          position: 'relative',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img
          src='https://i.pinimg.com/enabled_hi/564x/b3/df/e6/b3dfe6c7a79eea46ed3c1a301f98d948.jpg'
          alt="Box 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          backgroundColor: 'transparent',
          padding: '5px 10px',
          borderRadius: '5px',
          color:'black'
        }}>
        Sales Up to 40%
        </div>
      </a>
    </div>
  );
};

export default Boxes;
