import React  from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const EmailRequestPopup = (prop) => {
  const [userEmail, setUserEmail] = React.useState(null);
  const minWordLength = document.getElementById('minWordLength').value

  const handleCancel = () => prop.setShowEmailInput(false);
  const sendEmail = () => {
    const emailQuery = {
      'reqChar': prop.reqLetter,
      'otherChars': prop.letters,
      'minWordLength': minWordLength,
      'email': userEmail,
    }

    fetch('api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailQuery)
    })
    .then(response => {
      if (!response.ok){
        console.log('Error sending email has occurred');
      }else if (response.status === 204){
        console.log('Email not sent because no words found');
      }else{
        response.json().then(data => {
          console.log('email sent');
          handleCancel();
        })
      }
    })
  }

  return (
    <Modal
        show={prop.showEmailInput}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          Enter your email address
        </Modal.Header>
        <Modal.Body>
          <ul>
          An email will be sent for all words which:
            <li>{prop.reqLetter 
              ? "Contain the letter: " + prop.reqLetter
              : "Enter a required letter before sending an email request"}
            </li>
            <li>{prop.letters 
              ? "And all other letters are as follows: " + prop.letters
              : "Enter at least one other letter which may be in acceptable words"}
            </li>
          </ul>
          <label htmlFor="email">
            Email:
            <input 
              type="email" 
              id="userEmail" 
              name="userEmail"
              paceholder="Enter your email"
              size="30"
              onChange={e => setUserEmail(e.target.value)}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col>
              {(userEmail && userEmail.indexOf('@') !== -1 && userEmail.indexOf('.') !== -1)
                ? 
                  <Button onClick={sendEmail}>
                    Send Email
                  </Button>
                : ""
              }
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
  )
}

const EmailWordsButton = (prop) => {
  const [showEmailInput, setShowEmailInput] = React.useState(false);

  const handleShow = () => setShowEmailInput(true)
  if (prop.reqLetter != null && prop.letters.length > 0){
    return (
      <div>
        <Button onClick={handleShow}>
          Email Me My Words!
        </Button>
        <EmailRequestPopup
          showEmailInput={showEmailInput}
          setShowEmailInput={setShowEmailInput}
          reqLetter={prop.reqLetter}
          letters={prop.letters}
        />
      </div>
    )
  }else{
    return (
      <div/>
    )
  }
}

export default EmailWordsButton;