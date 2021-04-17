import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Register = () => {
  return (
    <>
      <div className="register-section">
        <div className="section-title">
          <h4>학부모 회원가입</h4>
        </div>
        <div className="box-section">
          <div className="box-register">
            <div className="mb-4">
              <h3>기본정보</h3>
              <p className="text-danger">*기본정보는 필수 입력사항입니다.</p>
            </div>
            <Form>
              <Form.Group className="form-inline">
                <Form.Label>
                  이름 <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  className="ipw-488"
                  type="email"
                  placeholder="이름 입력"
                />
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label>
                  ID <span className="text-danger">*</span>
                </Form.Label>
                <div className="input-btn-group">
                  <Form.Control
                    className="ipw-349"
                    type="email"
                    placeholder="ID 입력 (영문, 숫자 조합 6 ~13자리)"
                  />
                  <Button type="submit">중복확인</Button>
                </div>
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label>
                  비밀번호 <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  className="ipw-488"
                  type="email"
                  placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합 8~13자리)"
                />
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label>
                  비밀번호 확인 <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  className="ipw-488"
                  type="email"
                  placeholder="비밀번호 확인"
                />
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label>
                  휴대폰 번호 <span className="text-danger">*</span>
                </Form.Label>
                <div className="input-btn-group">
                  <Form.Control
                    className="ipw-349"
                    type="email"
                    placeholder="-를 제외한 휴대폰 번호 11자 입력"
                  />
                  <Button type="submit">인증번호 발송</Button>
                </div>
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label></Form.Label>
                <div className="input-btn-group">
                  <Form.Control
                    className="ipw-349"
                    type="email"
                    placeholder="인증번호 입력"
                  />
                  <Button type="submit">확인</Button>
                </div>
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label>
                  이메일 <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  className="ipw-488"
                  type="email"
                  placeholder="이메일 입력"
                />
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label>
                  주소 <span className="text-danger">*</span>
                </Form.Label>
                <div className="input-btn-group">
                  <Form.Control
                    className="ipw-349"
                    type="email"
                    placeholder=""
                    disabled
                  />
                  <Button type="submit">우편번호 찾기</Button>
                </div>
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label></Form.Label>
                <Form.Control
                  className="ipw-488"
                  type="email"
                  placeholder=""
                  disabled
                />
              </Form.Group>
              <Form.Group className="form-inline">
                <Form.Label></Form.Label>
                <Form.Control
                  className="ipw-488"
                  type="email"
                  placeholder="상세 주소 입력"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
