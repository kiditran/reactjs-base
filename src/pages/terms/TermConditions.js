import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TermConditions = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)

  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)

  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)

  return (
    <>
      <div className="box-terms mt-5">
        <h2 className="text-center page-title mb-5">로그인</h2>
        <Form>
          <section className="terms-section box-section">
            <Form.Check label="전체 동의" type="checkbox" id={`checkALL`} />
            <p>
              전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. 선택 항목은 동의를
              거부하는 경우에도 회원가입 및 서비스 이용은 가능합니다.
            </p>
          </section>
          <section className="terms-section box-section">
            <div className="d-md-flex justify-content-between mb-3">
              <Form.Check
                label={
                  <>
                    <b>[필수]</b> 서비스 이용약관 동의
                  </>
                }
                type="checkbox"
                id={`condition-1`}
              />
              <Button className="btn-terms" onClick={handleShow}>
                내용보기
              </Button>
            </div>
            <div className="d-md-flex justify-content-between mb-3">
              <Form.Check
                label={
                  <>
                    <b>[필수]</b> 개인정보 수집 및 이용 동의
                  </>
                }
                type="checkbox"
                id={`condition-2`}
              />
              <Button className="btn-terms" onClick={handleShow1}>
                내용보기
              </Button>
            </div>
            <div className="d-md-flex justify-content-between mb-3">
              <Form.Check
                label={
                  <>
                    <b>[필수]</b> 만 14세 미만 가입 시 법정대리인 동의
                  </>
                }
                type="checkbox"
                id={`condition-3`}
              />
              <Button className="btn-terms" onClick={handleShow2}>
                내용보기
              </Button>
            </div>
            <div className="d-md-flex justify-content-between mb-3">
              <Form.Check
                label={
                  <>
                    <b>[필수]</b> 마케팅 정보 활용 동의
                  </>
                }
                type="checkbox"
                id={`condition-4`}
              />
              <Button className="btn-terms" onClick={handleShow3}>
                내용보기
              </Button>
            </div>
          </section>

          <div className="text-center my-5">
            <Button as={Link} className="btw-386" to="/register">
              다음
            </Button>
          </div>
        </Form>
      </div>

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
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={handleClose} className="btw-224">
            확인
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show1}
        onHide={handleClose1}
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
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={handleClose1} className="btw-224">
            확인
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show2}
        onHide={handleClose2}
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
          <Button onClick={handleClose2} className="btw-224">
            확인
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show3}
        onHide={handleClose3}
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
            <p>
              전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. 선택 항목은 동의를
              거부하는 경우에도 회원가입 및 서비스 이용은 가능합니다.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={handleClose3} className="btw-224">
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TermConditions
