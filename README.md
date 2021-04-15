# Cheater Bee
Looking for the command line Cheater Bee? It can be found [here](https://github.com/ejamison3/cheaterBee-cli)
### Table of Contents
[About Cheater Bee](#about)  
[How to Install and Run](#install)  
[Dictionary](#dictionary)  
[Other Iterations](#iterations)  

## <a name="about"></a>About Cheater Bee   
Cheater Bee displays the words meeting the user's input (i.e., words made up of the input letters that also containing the user's required letter) on the screen or gives the user the option to have the words sent to their email.
### Why?  
The inspiration for building the original Cheater Bee (See [Iterations](#iterations) section) came from wanting some help solving the New York Times daily 'Spelling Bee' puzzle. And then I wanted to test out Twilio's SendGrid functionality so I built this.  

### Tech   
Cheater Bee is built with a flask Python backend and a React (using create-react-app) front end. Email functionality is built using SendGrid. 

### Find online
It is deployed [here](https://cheaterbee.netlify.app/)

## <a name="install"></a>How to Install and Run
To start the backend, go into the cheaterbee_flask subdirectory and enter 'flask run' in the command line.  
To start the frontend, go into the cheaterbee_client subdirectory and enter 'npm start' in the command line. 

## <a name="dictionary"></a>Dictionary
The dictionary is the standard dictionary in a mac. It's pretty horrible. If you have access to a better dictionary (i.e., collection of words you want to search), then I highly recommend replacing the dictionary.txt file inside the cheaterbee_flask directory. Words inside this file should each be on a separate line.

## <a name="iterations"></a>Other Iterations
The original cheater bee was a command line tool written in C. You can find it in my github under the name [cheaterbee-cli.](https://github.com/ejamison3/cheaterBee-cli) It's lovely. You should check it out.