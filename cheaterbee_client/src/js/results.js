import React from 'react';
import API_URL from './constants.js';

const Results = (prop) => {
  const query = prop.searchQuery;

  React.useEffect(() => {
    if (query != null){
      fetch(API_URL + 'api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
      })
      .then(response => {
        if (!response.ok){
          console.log('some sort of error has occurred');
          prop.setSearchResponse(0);
          prop.setIsLoading(false);
        }else if (response.status === 204){
          prop.setSearchResponse(null);
          prop.setIsLoading(false);
        }else{
          response.json().then(data => {
            prop.setSearchResponse(data);
            prop.setIsLoading(false);
            console.log(data);
          })
        }
      })
    }
  }, [prop.searchQuery]);


  if (prop.isLoading){
    return (
      <div>
        LOADING....
      </div>
    )
  }else{
    if (prop.searchResponse == null) {
      return (
        <div>
          No words meet your criteria
        </div>
      )
    }else{
      const wordList = prop.searchResponse.words
      const words = []
      console.log(wordList)
      {wordList.map((word, index) => {
        words.push(
          <div key={index.toString()}>
            {word}
          </div>
        )
      })}
      return (
        <div>
          {words}
        </div>
      )
    }
  }
}

export default Results;