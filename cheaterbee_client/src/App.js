import './App.css';
import Letters from './js/letters.js';
import RequiredLetter from './js/requiredLetter.js';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';



function FindWordsButton() {
  // function getWords(){
  //   fetch(apiurl)
  // }

  return(
    <Row>
      <label htmlFor="minWordLength">Minimum Word Length</label>
      <select name="minWordLength" id="minWordLength">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => {
          return(
            <option value={x}>{x}</option>
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
