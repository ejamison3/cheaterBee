import React from 'react';
import { Row } from 'react-bootstrap';

const RequiredLetter = (prop) => {
  return (
    <Row>
      <label htmlFor="reqLetter">
        Required Letter
        <input 
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