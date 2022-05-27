import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='cart-icon-container' onClick={toggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
