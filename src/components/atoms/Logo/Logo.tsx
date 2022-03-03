import React from 'react';
import {Link} from 'react-router-dom';
import LogoImage from '../../../assets/images/fox.png';
import './logo.scss';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={LogoImage} className="logo__image" alt="로고" />
      <h2 className="logo__text">책 읽어주는 여우</h2>
    </Link>
  );
}

export default Logo;
