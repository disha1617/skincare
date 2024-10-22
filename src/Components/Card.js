import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

export default function HeroCard() {
  return (
    <Card className="bg-gradient-to-r from-gray-100 to-gray-200 shadow-none overflow-hidden my-8">
      <div className="flex flex-col md:flex-row items-center">
        <CardContent className="flex items-center justify-center p-8 md:w-1/2 h-full">
          <Box className="max-w-lg text-center">
            <Typography variant="overline" className="text-gray-600 mb-2">
              Discover Your Glow
            </Typography>
            <Typography variant="h2" component="h1" className="mb-4 font-serif text-gray-800 leading-tight">
              Cherish Your Skin, <br />
              <span className="text-primary">Elevate Your Beauty</span>
            </Typography>
            <Typography variant="body1" className="mb-6 text-gray-600 leading-relaxed">
              Embrace the journey to your best self with our curated selection of skincare and makeup. We believe that true beauty radiates from within, and our mission is to help you unlock your unique glow.
            </Typography>
            <Box className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full"
              >
                Shop Now
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full"
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </CardContent>
        <div className="md:w-1/2">
          <img
            className="h-64 w-full object-cover md:h-[500px]"
            src='https://i.pinimg.com/enabled_hi/564x/13/14/6c/13146c62bf5a9b75a9c2fe21cc90635c.jpg'
            alt='Skincare products'
          />
        </div>
      </div>
    </Card>
  );
}