import React  from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const EmailWordsButton = (prop) => {
  const [showEmailInput, setShowEmailInput] = React.useState(false)

  const handleShow = () => setShowEmailInput(true)
  const handleCancel = () => setShowEmailInput(false)

  return (
    <div>
      <Button onClick={handleShow}>
        Email Me Results
      </Button>
      <Modal
        show={showEmailInput}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          Enter your email address
        </Modal.Header>
        <Modal.Body>
          <ul>
          An email will be sent for all words which:
            <li>Contain the letter {document.getElementById('reqLetter').value}</li>
            <li>Contain the other letters you entered</li>
          </ul>
          <label htmlFor="email">
            <input type="email" id="userEmail" name="userEmail">
            </input>
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col>
                <Button>
                  Send Email
                </Button>
              </Col>
              <Col>
                <Button onClick={handleCancel}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>


      </Modal>
    </div>
  )

}

export default EmailWordsButton;