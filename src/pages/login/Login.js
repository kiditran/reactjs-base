import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="box-login mt-5">
        <h2 className="text-center page-title mb-5 maxw-386 ml-auto">로그인</h2>
        <Form>
          <Form.Group className="form-inline">
            <Form.Label>ID</Form.Label>
            <Form.Control
              className="ipw-386"
              type="email"
              placeholder="ID를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="form-inline">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              className="ipw-386"
              type="email"
              placeholder="비밀번호를 입력해주세요.."
            />
          </Form.Group>

          <div className="d-flex justify-content-end mt-5">
            <Button type="submit" className="btw-386">
              로그인
            </Button>
          </div>

          <div className="d-flex justify-content-between maxw-386 ml-auto mt-3">
            <Form.Check label="아이디 저장" type="checkbox" id={`saveID`} />
            <div className="span-login">
              <NavLink to="/terms">회원가입 </NavLink> |
              <NavLink to="/register">ID/비밀번호 찾기</NavLink>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Login
