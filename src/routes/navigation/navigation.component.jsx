import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';
import { ReactComponent as GlobeLogo } from '../../assets/globe.svg';

const Navigation = () => {
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
          <Link className='navbar-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
