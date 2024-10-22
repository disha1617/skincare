import React from 'react';
import { Grid, Typography } from '@mui/material';

const features = [
  { title: 'Autumn Skincare', image: 'https://i.pinimg.com/enabled_hi/564x/d7/a8/64/d7a8641ac85ed9202774e108eba80444.jpg', href: '/autumn-skincare' },
  { title: 'Anti-aging Cream', image: 'https://i.pinimg.com/564x/f2/f0/c1/f2f0c1f6a35450d39aa6303642825957.jpg', href: '/anti-aging-cream' },
  { title: 'Sales Up to 40%', image: 'https://i.pinimg.com/enabled_hi/564x/b3/df/e6/b3dfe6c7a79eea46ed3c1a301f98d948.jpg', href: '/sales' },
];

export default function Boxes() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} md={4} key={feature.title}>
            <a href={feature.href} className="block">
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg cursor-pointer group">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Typography variant="h5" className="text-white font-serif">
                    {feature.title}
                  </Typography>
                </div>
              </div>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}