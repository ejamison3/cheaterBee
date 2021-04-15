import React from 'react';
import { Row, Button, Alert } from 'react-bootstrap';


const FindWordsButton = (prop) => {

  const updateQuery = (evt) => {
    evt.preventDefault();

    const minWordLength = document.getElementById('minWordLength').value

    if (prop.reqLetter === "" || prop.letters.length == 0){
      console.log("should be showing alert");
      // <Alert variant="danger">Please enter a Required Letter and one or more Additional allowed letters!</Alert>;
      alert("Enter a required letter and one or more additional letters!")
      return;
    }
    
    // create empty structure
    let query = {
      'reqChar': prop.reqLetter,
      'otherChars': prop.letters,
      'minWordLength': minWordLength,
    }
    prop.setSearchQuery(query)
    prop.setIsLoading(true)
  }
  if (prop.reqLetter != null && prop.letters.length > 0){
    return(
      <Row>
        <Button onClick={updateQuery}>
          Find all of the words
        </Button>
      </Row>
    )
  }else{
    return(
      <div/>
    )
  }
}

export default FindWordsButton;