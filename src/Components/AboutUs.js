import React from 'react';

const AboutUs = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  };

  const sectionStyle = {
    backgroundColor: '#E9F7EF',
    padding: '30px',
    borderRadius: '10px',
    marginBottom: '40px',
  };

  const teamStyle = {
    backgroundColor: '#D6EAF8',
    padding: '30px',
    borderRadius: '10px',
    marginBottom: '40px',
  };

  const teamMembersStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  const memberStyle = {
    margin: '20px',
    textAlign: 'center',
  };

  const memberImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const footerStyle = {
    backgroundColor: '#2C3E50',
    color: 'white',
    padding: '20px',
    marginTop: '40px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Aura</h1>
      <p>
        At Aura, we believe that skincare is more than just a routine—it's a way of life. 
        Our mission is to empower you to embrace your natural beauty through carefully crafted skincare products 
        that nourish, protect, and enhance your skin's health.
      </p>
      <p>
        From natural ingredients to innovative formulations, Aura brings you products that are both gentle on your skin 
        and effective in delivering real results. We are committed to providing quality skincare solutions for all skin types.
      </p>

      <div style={sectionStyle}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and nurture your skin's health by using nature's finest ingredients, ensuring 
          that every product is safe, effective, and environmentally friendly.
        </p>
      </div>

      <div style={teamStyle}>
        <h2>Meet Our Team</h2>
        <div style={teamMembersStyle}>
          <div style={memberStyle}>
            <img 
              src="https://i.pinimg.com/564x/6c/39/f5/6c39f56343b9655b19e00903424c8d46.jpg" 
              alt="Team Member 1" 
              style={memberImageStyle} 
            />
            <h3>Jani Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div style={memberStyle}>
            <img 
              src="https://i.pinimg.com/736x/62/a6/f7/62a6f7b29b6e4cb9de7c2fa4fe9f7c04.jpg" 
              alt="Team Member 2" 
              style={memberImageStyle} 
            />
            <h3>Crystal Smith</h3>
            <p>Head of Product Development</p>
          </div>
          <div style={memberStyle}>
            <img 
              src="https://i.pinimg.com/736x/7d/99/c4/7d99c407825d4e6ba9f882b9d6095da9.jpg" 
              alt="Team Member 3" 
              style={memberImageStyle} 
            />
            <h3>Emily Johnson</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </div>

      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Aura Skincare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
