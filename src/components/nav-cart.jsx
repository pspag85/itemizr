import React from 'react';
import {connect} from 'react-redux';
import Logout from './logout';
import '../css/nav-cart.css';

const NavCart = () => (
  <div id="nav-cart" className="ft-14 pointer">
    <div id="nav-cart--link">
      <img src="/img/shopping-cart.png" />
      <h4>0</h4>
    </div>
  </div>
);

export default NavCart;
