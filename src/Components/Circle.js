import React from 'react';
import { Typography, Grid } from '@mui/material';

const categories = [
  { name: 'Cleanser', image: 'https://i.pinimg.com/enabled_hi/564x/65/ab/c6/65abc6f75fe9a934d4114e731762f20e.jpg', href: '/cleanser' },
  { name: 'Moisturizer', image: 'https://i.pinimg.com/enabled_hi/564x/1e/4e/92/1e4e92787e4c6e65879563cd4fdb925b.jpg', href: '/moisturizer' },
  { name: 'Serums', image: 'https://i.pinimg.com/enabled_hi/564x/21/44/ac/2144ac77377d63ce5962fdd1b511a56f.jpg', href: '/serum' },
  { name: 'Facemask', image: 'https://i.pinimg.com/enabled_hi/564x/0f/4b/7a/0f4b7ad713abf0d6a9755db2258b02de.jpg', href: '/facemask' },
];

export default function Circle() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Typography variant="h4" component="h2" className="mb-2 font-serif text-center text-gray-800">
          Our Pick for You
        </Typography>
        <Typography variant="subtitle1" className="mb-8 text-center text-gray-600">
          Radiate Beauty, Embrace You
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category) => (
            <Grid item xs={6} sm={3} key={category.name}>
              <a href={category.href} className="block text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full bg-gray-200 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <Typography variant="subtitle1" className="font-medium text-gray-800">
                  {category.name}
                </Typography>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}