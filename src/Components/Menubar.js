import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';

export default function Menubar() {
  return (
    <AppBar position="static" color="transparent" elevation={1} className="border-b border-gray-200 shadow-md z-50">
      <Toolbar className="justify-between container mx-auto">
        <Typography variant="h4" component="div" className="text-gray-800 font-serif">
          Aura
        </Typography>
        <div className="hidden md:flex space-x-4">
          <Button color="inherit" className="text-gray-600 hover:text-gray-800">Home</Button>
          <Button color="inherit" className="text-gray-600 hover:text-gray-800">Shop</Button>
          <Button color="inherit" className="text-gray-600 hover:text-gray-800">About</Button>
          <Button color="inherit" className="text-gray-600 hover:text-gray-800">Contact</Button>
        </div>
        <div className="flex items-center space-x-2">
          <IconButton color="inherit" aria-label="shopping cart" className="text-gray-600 hover:text-gray-800">
            <ShoppingCart />
          </IconButton>
          <IconButton color="inherit" aria-label="account" className="text-gray-600 hover:text-gray-800">
            <Person />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}     