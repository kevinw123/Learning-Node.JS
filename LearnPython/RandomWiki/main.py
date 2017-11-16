import webbrowser
import requests
import json

def main():
    print("-----Hello, Welcome to Random Wikipedia Article getter-----");
    while True:
        response = requests.get("https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=10&format=json")
        jsonResponse = response.json()['query']['random']
        for article in jsonResponse:
            accept = input("Would you like to read " + article['title'] + " ? (Y/N)\n")
            if accept == "Y":
                webbrowser.open("https://en.wikipedia.org/wiki?curid=" + str(article["id"]))
            else:
                continue

        continueVar = input("Would you like to continue? (Y/N\n")
        if continueVar == "N":
            break
        else:
            continue

if __name__ == '__main__':
    main()