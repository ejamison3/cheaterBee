import './App.css';
import Letters from './js/letters.js';
import RequiredLetter from './js/requiredLetter.js';
import MinWordLength from './js/minWordLength.js';
import FindWordsButton from './js/findWordsButton.js';
import EmailWordsButton from './js/emailWordsButton.js';
import Results from './js/results.js';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const App = () => {
  const [reqLetter, setReqLetter] = React.useState(null);
  const [letters,setLetters] = React.useState([""]);
  const [searchQuery, setSearchQuery] = React.useState(null);
  const [searchResponse, setSearchResponse] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

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
        <MinWordLength />
        <Row>
          <Col md={{span: 3, offset: 1}}>
            <FindWordsButton
              letters={letters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              />
          </Col>
          <Col md={{span: 3, offset: 1}}>
            <EmailWordsButton/>
          </Col>
        </Row>
        <Results 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchResponse={searchResponse}
          setSearchResponse={setSearchResponse}
          isLoading={isLoading}
          setIsLoading={setIsLoading}

        />
      </Container>
  );
}

export default App;
