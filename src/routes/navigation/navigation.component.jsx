import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as GlobeLogo } from '../../assets/globe.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.contexts';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navbar'>
        <Link className='navbar-brand' to='/'>
          <div>{<GlobeLogo />}</div>
        </Link>
        <div className='navbar-menu'>
          <Link className='navbar-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='navbar-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='navbar-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
