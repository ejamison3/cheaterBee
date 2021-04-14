from flask import Flask, request, jsonify
# from flask_cors import CORS
import util

app = Flask(__name__)
# CORS(app)

@app.route('/hello')
def say_hello_world():
    return {'result': "Hello World"}


@app.route('/words', methods=['POST'])
def get_words():
    """Get words that match input criteria"""

    req = request.get_json()
    print(req)
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