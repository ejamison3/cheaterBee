import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Letters(prop) {
  const letters = prop.letters

  function addLetter() {
    // add another letter somehow
    prop.setLetters([...letters, ""])
  }

  function removeLetter(index) {
    const letterList = [...letters];
    letterList.splice(index, 1);
    prop.setLetters(letterList)
    //remove last letter
  }

  function updateLetter(e, index) {
    const letterList = [...letters]
    letterList[index] = e.target.value
    prop.setLetters(letterList)
  }

  return (
    <Row>
      Additional Letters allowed
      {letters.map((letter, index) => {
        return(
          <Col key={index.toString()}>
            <input 
              name="letter"
              id={"letter"+index}
              inLength="1" 
              maxLength="1" 
              pattern="[A-Za-z]"
              size="1"
              value={letter}
              onChange={e => updateLetter(e, index)}
            />
            <div>
              {letters.length !== 1 && <button onClick={() => removeLetter(index)}>Remove</button>}
              {letters.length -1 === index && <button onClick={addLetter}>Add</button>}
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default Letters;