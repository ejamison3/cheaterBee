import React, { useHistory } from 'react';
import { Row, Button, Alert } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';


const FindWordsButton = (prop) => {

  const updateQuery = (evt) => {
    evt.preventDefault();

    const reqChar = document.getElementById('reqLetter').value
    const minWordLength = document.getElementById('minWordLength').value

    // get required letters
    let otherChars = "";
    let currChar = document.getElementById('letter0');
    let currNum = 1;
    while (currChar){
      otherChars = otherChars + currChar.value;
      currChar = document.getElementById('letter'+currNum);
      currNum ++;
    }

    if (reqChar === "" || otherChars === ""){
      console.log("should be showing alert");
      <Alert variant="danger">Please enter a Required Letter and one or more Additional allowed letters!</Alert>;
      return;
    }
    
    // create empty structure
    let query = {
      'reqChar': reqChar,
      'otherChars': otherChars,
      'minWordLength': minWordLength,
    }
    prop.setSearchQuery(query)
    prop.setIsLoading(true)
  }
  return(
    <Row>
      <Button onClick={updateQuery}>
        Find all of the words
      </Button>
    </Row>
  )
}


  export default FindWordsButton;