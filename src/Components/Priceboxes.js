import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

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
    description: "Hydrating and revitalizing facial toner", 
    image: "https://i.pinimg.com/564x/a1/98/d4/a198d44c664dacbe849b82d1144390c6.jpg"
  },
  { 
    price: "$24.99", 
    description: "A detoxifying and renewing face mask", 
    image: "https://i.pinimg.com/564x/16/b3/94/16b394282cf2e2312c630396e8158758.jpg"
  },
  { 
    price: "$34.99", 
    description: "Revitalizing eye cream for a youthful look", 
    image: "https://i.pinimg.com/564x/81/37/5f/81375f6738b606cca9e0cc7ac53ab08a.jpg"
  },
];

const Priceboxes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Typography variant="h4" component="h2" className="mb-8 font-serif text-center text-gray-800">
          Best Sellers
        </Typography>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="h-full flex flex-col transition-shadow duration-300 hover:shadow-lg">
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.description}
                  className="h-64 object-cover"
                />
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <Typography variant="subtitle1" component="h3" className="mb-2 text-center font-medium text-gray-800">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" className="mb-4 text-center font-bold text-gray-900">
                      {product.price}
                    </Typography>
                  </div>
                  <Button variant="outlined" color="primary" fullWidth className="mt-2">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}

export default Priceboxes;