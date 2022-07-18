import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
