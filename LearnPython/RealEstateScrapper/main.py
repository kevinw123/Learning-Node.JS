import requests
from bs4 import BeautifulSoup

def activate_scrapper():
    r = requests.get("https://www.century21.ca/search/Q-Vancouver%2C%20BC/49.384920633507456;-123.55725749844589;49.129925680308105;-122.6900242220787/v_Gallery")
    c = r.content
    soup = BeautifulSoup(c, "html.parser")
    all_listings = soup.find_all("div", {"class": "property-list-item"})
    i = 0
    for i in range(len(all_listings)):
        print(all_listings[i].find("a", {"class": "list-photo"}))
        print(all_listings[i].find("span", {"class": "address-line-1"}).text + "," + all_listings[i].find("span", {"class": "address-line-2"}).text)
        print(all_listings[i].find("div", {"class": "list-price"}).text)

def main():
    print("Welcome to the Real Estate Scrapper tool")
    activate_scrapper()

if __name__ == "__main__":
    main()