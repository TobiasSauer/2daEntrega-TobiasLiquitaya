import React from 'react'
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
    <div className='CartWidget'>
        <ShoppingCartIcon fontSize="large"/>
    </div>
  )
}

export default CartWidget;