import requests
import json

# Enter Oxford Dictionary API Keys
app_id = ''
app_key = ''

language = 'en'

# Make Request to get JSON data
def make_request(word):
    print(word)
    url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word.lower()

    r = requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})

    if r.status_code != 200:
        print("No word found. Please try again")
    else:
        print("json \n" + json.dumps(r.json()))

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