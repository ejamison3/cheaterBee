import React from 'react';
import { Row } from 'react-bootstrap';

function RequiredLetter(prop) {
  return (
    <Row>
      <label htmlFor="reqLetter">
        Required Letter
        <input 
          name="reqLetter" 
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