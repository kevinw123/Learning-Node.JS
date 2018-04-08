import requests
import json
from difflib import get_close_matches

# Enter Oxford Dictionary API Keys
app_id = '8656f381'
app_key = '79e9abc768d4f6bc125514b11388c63d'

language = 'en'

data = json.load(open("words_dictionary.json"))

def summarizeOutput(json):
    print("Word: {}".format(json["results"][0]["word"]))
    entries = json["results"][0]["lexicalEntries"][0]["entries"][0]

    # Get Definitions
    definitions = entries["senses"][0]["definitions"]
    for i in range(len(definitions)):
        print("Definition {} : {}".format(i + 1, definitions[i]))

    # Examples
    examples = entries["senses"][0].get("examples", "")
    if (examples != ""):
        for i in range(len(examples)):
            print("Example {} : {}".format(i + 1, examples[i]["text"]))



# Make Request to get JSON data
def make_request(word):
    url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word.lower()

    r = requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})

    if r.status_code != 200:
        if len(get_close_matches(word, data.keys())) > 0:
            yn = input("Did you mean %s instead? Enter Y if yes, or N if no: " % get_close_matches(word, data.keys())[0])
            if yn == "Y":
                make_request(get_close_matches(word, data.keys())[0])
            elif yn == "N":
                print("No word found. Please try again")
            else:
                print("Did not understand entry")
    else:
        summarizeOutput(r.json())

def isEmpty(word):
    if word.strip() == "":
        return True
    else:
        return False

def main():
    word = input("Welcome to the Dictionary. Please enter a word: ")
    if isEmpty(word) == True:
        print("Invalid word")
    else:
        make_request(word)

if __name__ == "__main__":
    main()