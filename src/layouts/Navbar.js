import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="lc-navigation">
        <div className="container">
          <ul className="d-flex justify-content-center">
            <li>
              <NavLink to="/">LiveClass 책글</NavLink>
            </li>
            <li>
              <NavLink to="/">LiveClass 목적</NavLink>
            </li>               
            <li>
              <NavLink to="/">과학수학 다빈치</NavLink>
            </li>
            <li>
              <NavLink to="/">도서</NavLink>
            </li>
            <li>
              <NavLink to="/"> LiveClass 안내</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
