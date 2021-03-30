import './App.css';
import Letters from './js/letters.js';
import RequiredLetter from './js/requiredLetter.js';
import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';



function FindWordsButton() {
  // function getWords(){
  //   fetch(apiurl)
  // }

  return(
    <Row>
      <label htmlFor="minWordLength">Minimum Word Length</label>
      <select name="minWordLength" id="minWordLength">
        {Array.from(Array(10).keys()).map(x => {
          return(
            <option value={x+1}>{x+1}</option>
          )
        })}
      </select>
      <Button>
        Find all of the words
      </Button>
    </Row>
  )
}


function App() {
  const [reqLetter, setReqLetter] = React.useState(null)
  const [letters,setLetters] = React.useState([""])

  return (
    <Container fluid>
      <RequiredLetter 
        reqLetter={reqLetter}
        setReqLetter={setReqLetter}
      />
      <Letters 
        letters={letters}
        setLetters={setLetters}
      />
      <FindWordsButton
        letters={letters}
      />
    </Container>
  );
}

export default App;
