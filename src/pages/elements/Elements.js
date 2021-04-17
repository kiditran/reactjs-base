import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const TermConditions = () => {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleShow1 = () => setShow1(true)
  const handleClose1 = () => setShow1(false)

  const handleShow2 = () => setShow2(true)
  const handleClose2 = () => setShow2(false)

  return (
    <>
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

      <Button variant="primary" onClick={handleShow}>
        Modal LiveClass
      </Button>
      <Button variant="primary" onClick={handleShow1}>
        Modal custom 1 button
      </Button>
      <Button variant="primary" onClick={handleShow2}>
        Modal custom 2 button
      </Button>

      {/* Modal custom 2 button */}

      <Modal
        show={show2}
        onHide={handleClose2}
        dialogClassName="modalw-386 modal-comfirm"
        centered
      >
        <Modal.Body scrollable={true}>
          <div className="modal-body-inner">
            <p className="mb-0">삭제 하시겠습니까?</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose2}>취소</Button>
          <Button onClick={handleClose2}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal custom 1 button */}

      <Modal
        show={show1}
        onHide={handleClose1}
        dialogClassName="modalw-386 modal-comfirm"
        centered
      >
        <Modal.Body scrollable={true}>
          <div className="modal-body-inner">
            <p className="mb-0">삭제가 완료되었습니다.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose1}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal LiveClass */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modalw-996"
        centered
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title>서비스 이용약관</Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable={true}>
          <div className="modal-body-inner">
            <p>
              전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. 선택 항목은 동의를
              거부하는 경우에도 회원가입 및 서비스 이용은 가능합니다.
            </p>
            <p>
              전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. 선택 항목은 동의를
              거부하는 경우에도 회원가입 및 서비스 이용은 가능합니다.
            </p>
            <p>
              전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. 선택 항목은 동의를
              거부하는 경우에도 회원가입 및 서비스 이용은 가능합니다.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={handleClose} className="btw-224">
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TermConditions
