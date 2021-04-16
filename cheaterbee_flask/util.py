"""helper functions used by app.py"""

def find_words(req_char, other_chars, min_length=1):
    """returns list of words matching criteria in dictionary file"""
    
    # make case insensitive
    req_char = req_char.lower()
    other_chars = other_chars.lower()

    dict_file = open("dictionary.txt")
    words = []

    for word in dict_file:
        word = word.rstrip()
        save_word = True

        if (req_char in word) and (len(word) >= min_length):
            for letter in word:
                if letter not in other_chars and letter != req_char:
                    save_word = False
                    break
            if save_word:
                words.append(word)
            
    return words