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
        <div className="text-center">
          <h1 className="text-primary">
            Welcome to Cheater Bee!
          </h1>
          <h3>
            Enter a required letter and one or more additional letters to find words matching the criteria.
          </h3>
        </div>
        <Row>
          <Col md={4}>
            <RequiredLetter 
              reqLetter={reqLetter}
              setReqLetter={setReqLetter}
            />
          </Col>
          <Col md={4}>
            <Letters 
              letters={letters}
              setLetters={setLetters}
            />
          </Col>
          <Col md={4}>
            <MinWordLength />
          </Col>
        </Row>
        <Row className = "justify-content-center mt-3">
          <Col md={{span: 3, offset: 1}}>
            <FindWordsButton
              reqLetter={reqLetter}
              letters={letters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              />
          </Col>
          <Col md={{span: 3, offset: 1}}>
            <EmailWordsButton
              reqLetter={reqLetter}
              letters={letters}
            />
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
