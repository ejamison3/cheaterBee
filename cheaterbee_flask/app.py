from flask import Flask, request, jsonify
from flask_cors import CORS
import util
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)
CORS(app)

@app.route('/api/sendEmail', methods=['POST'])
def send_email():
    """Sends email to user with words that meet criteria"""

    req = request.get_json()
    print(req)
    email = req["email"]
    req_char = req["reqChar"]
    other_chars = req["otherChars"]
    min_word_length = int(req["minWordLength"])

    email_response = {
        'error': None,
        'words': [],
    }

    words_list = util.find_words(req_char, other_chars, min_word_length)
    status = 200

    # if words are found, try to send email
    if len(words_list) > 0:
        message = Mail(
            from_email='cheaterbeewords@gmail.com',
            to_emails=email,
            subject='Cheater Bee Words',
            html_content='''The following words are made up of the characters <strong>''' +
             ','.join(other_chars) + 
             '</strong> and contain your required character <strong>' + 
             req_char + ':</strong>: <div>' +
             '\n'.join(words_list) +
             '</div>Thanks for using CheaterBee!!'''
        )
        print(message)
        try:
            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(e.message)
            # email_response['error'] = e
            status = 200
    else:
        email_response['error'] = 'No words found'
        status = 204

    # if no words found, do not send email (indicate this in front end)    

    return(jsonify(email_response), status)


@app.route('/api/words', methods=['POST'])
def get_words():
    """Get words that match input criteria"""

    req = request.get_json()
    req_char = req["reqChar"]
    other_chars = req["otherChars"]
    min_word_length = int(req["minWordLength"])

    words_list = util.find_words(req_char, other_chars, min_word_length)
    print(f'words_list: {words_list}')
    words_response = {
        'error': None,
        'words': words_list,
    }

    print(f'words_response: {words_response}')
    status_code = 200 if len(words_list) > 0 else 204

    return (jsonify(words_response), status_code)


# if __name__ == '__main__':
#     app.run(host='0.0.0.0', debug=True)