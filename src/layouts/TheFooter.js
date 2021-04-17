import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import LogoFooter from '../assets/logo/logoFooter.png'

const TheFooter = () => {
  return (
    <div className="lc-footer">
      <div className="container">
        <div className="footer-top d-flex align-items-center justify-content-between">
          <div className="footer-logo">
            <Image src={LogoFooter} alt="LiveClass LogoFooter" />
          </div>
          <div className="footer-nav">
            <nav>
              <ul className="d-flex">
                <li>
                  <NavLink to="/">찾아오시는 길</NavLink>
                </li>
                <li>
                  <NavLink to="/">개인정보처리방침</NavLink>
                </li>
                <li>
                  <NavLink to="/">1:1 문의하기</NavLink>
                </li>
                <li>
                  <NavLink to="/">자주 묻는 질문</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-infor">
          <h4 className="footer-title">책읽기와 글쓰기 LIVE 수업 리딩엠</h4>
          <p className="footer-contact">
            서울특별시 서초구 고무래로 10길 27. 주호빌딩 402호 / TEL :
            02-537-2248 / FAX : 02-2646-8825 리딩엠 대표 : 황종일 /
            <br />
            사업자등록번호 105-87-39631 / 통신판매신고번호
            제2018-서울서초-2460호
          </p>
          <p className="footer-copyright mb-0">
            Copyright ⓒ 2014 ReadingM, ALL rights reserved.
          </p>
        </div>
        <span className="lc-backtop">Top</span>
      </div>
    </div>
  )
}

export default TheFooter
