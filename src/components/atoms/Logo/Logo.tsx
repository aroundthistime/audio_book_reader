import React from 'react';
import {Link} from 'react-router-dom';
import LogoImage from '../../../assets/images/fox.png';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={LogoImage} className="logo__image" alt="로고" />
    </Link>
  );
}

export default Logo;
