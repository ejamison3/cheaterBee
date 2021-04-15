import React from 'react';
import { Row } from 'react-bootstrap';

const MinWordLength = () => {
  return(
    <Row className="justify-content-center">
      <label htmlFor="minWordLength">Minimum Word Length</label>
      <select name="minWordLength" id="minWordLength" className="ml-1">
        {Array.from(Array(10).keys()).map(x => {
          return(
            <option value={x+1} key={x+1}>{x+1}</option>
            )
          })}
      </select>
    </Row>
  )
}

export default MinWordLength;