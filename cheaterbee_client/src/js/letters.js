import React from 'react';
import { Col, Row } from 'react-bootstrap';

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
                  name="letter"
                  id={"letter"+index}
                  minLength="1" 
                  maxLength="1" 
                  pattern="[A-Za-z]"
                  size="1"
                  value={letter}
                  onChange={e => updateLetter(e, index)}
                  />
                {letters.length !== 1 && <button className="with-margin" onClick={() => removeLetter(index)}>Remove</button>}
                {letters.length -1 === index && <button className="with-margin" onClick={addLetter}>Add</button>}
              </div>
          )
        })}
      </Col>
    </Row>
  )
}

export default Letters;