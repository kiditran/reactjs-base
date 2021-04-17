import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Logo from '../assets/logo/logo.png'
import Navbar from './Navbar'

const TheHeader = () => {
  return (
    <div className="lc-header">
      <div className="container">
        <div className="header-logo text-center">
          <span className="logo-img">
            <Image src={Logo} alt="LiveClass Logo" />
          </span>
          <span className="span-login">
            <NavLink to="/login">로그인</NavLink> |{' '}
            <NavLink to="/register">회원가입</NavLink>
          </span>
        </div>
      </div>
      <div className="header-nav">
        <Navbar />
      </div>
    </div>
  )
}

export default TheHeader
