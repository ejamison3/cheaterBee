import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Letters = (prop) => {
  const letters = prop.letters

  const addLetter = () => {
    // add another letter somehow
    prop.setLetters([...letters, ""])
  }

  const removeLetter = (index) => {
    const letterList = [...letters];
    letterList.splice(index, 1);
    prop.setLetters(letterList)
    //remove last letter
  }

  const updateLetter = (e, index) => {
    const letterList = [...letters]
    letterList[index] = e.target.value
    prop.setLetters(letterList)
  }

  return (
    <Row className="justify-content-center">
      <Col className="justify-content-center">
        Additional Letters allowed
        {letters.map((letter, index) => {
          return(
            <div key={index.toString()}>
                <input 
                  className="mt-1"
                  name="letter"
                  id={"letter"+index}
                  minLength="1" 
                  maxLength="1" 
                  pattern="[A-Za-z]"
                  size="1"
                  value={letter}
                  onChange={e => updateLetter(e, index)}
                  />
                {letters.length !== 1 && <Button variant="secondary" className="ml-1 p-0" onClick={() => removeLetter(index)}>Remove</Button>}
                {letters.length -1 === index && <Button variant="warning" className="ml-1 p-1 warning" onClick={addLetter}>Add</Button>}
              </div>
          )
        })}
      </Col>
    </Row>
  )
}

export default Letters;