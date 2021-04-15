import React from 'react';
import { Row } from 'react-bootstrap';

const RequiredLetter = (prop) => {
  return (
    <Row className="justify-content-center">
      <label htmlFor="reqLetter">
        Required Letter
        <input 
          className="ml-1"
          name="reqLetter" 
          id="reqLetter"
          minLength="1" 
          maxLength="1" 
          pattern="[A-Za-z]"
          size="1"
          onChange={e => prop.setReqLetter(e.target.value)}
        />
        
      </label>
    </Row>
  )
}

export default RequiredLetter;