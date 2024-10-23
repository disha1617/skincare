import React from 'react';

const Blog = () => {
  const imageStyle = {
    width: '300px',
    height: '250px',
    marginLeft: '10px', // Add some space on the left
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the row of images and descriptions
  };

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',   // Center align individual image with description
    marginLeft: '20px',     // Add space between the image blocks
  };

  const descriptionStyle = {
    textAlign: 'center',
    width: '250px',         // Match the width of the images
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Blog</h3>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img
            src='https://i.pinimg.com/enabled_hi/564x/be/a0/06/bea006772fc3bae4ab67fd216be62aae.jpg'
            alt="Image 1"
            style={imageStyle}
          />
        
          <p style={descriptionStyle}>Tips & Procedure To Apply Luxury
          Beauty Cosmetic Cream</p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://i.pinimg.com/564x/97/f3/76/97f376703a02043da3ea4ea75e5150f0.jpg"
            alt="Image 2"
            style={imageStyle}
          />
          <p style={descriptionStyle}>The Best Way To Select Good High-
          End Cosmetic Products.</p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://i.pinimg.com/enabled_hi/564x/ff/06/e2/ff06e2fb013a64696ddd17411530207f.jpg"
            alt="Image 3"
            style={imageStyle}
          />
          <p style={descriptionStyle}>LightWeight Makeup To Enhance Your Natural Beauty.</p>
        </div>
      </div>
      <br/>
      <br/>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          
          <img
            src='https://i.pinimg.com/enabled_hi/564x/59/c7/51/59c7519adb829ba20565b3f82c1b8a1c.jpg'
            alt="Image 1"
            style={imageStyle}
          />
          <p style={descriptionStyle}>Herbal Ingredients And their Role in
          Beauty Creams.</p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://i.pinimg.com/564x/83/fc/bb/83fcbbc7f7bde8b458a6f605771aafe7.jpg"
            alt="Image 2"
            style={imageStyle}
          />
          <p style={descriptionStyle}>All Essential Nutrients Your Skin Requires All Night</p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://i.pinimg.com/enabled_hi/564x/0d/c4/92/0dc492fdcf59cc14515865cd471fda02.jpg"
            alt="Image 3"
            style={imageStyle}
          />
          <p style={descriptionStyle}>How to Find The Best Brow  Shape For Your Face .</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
