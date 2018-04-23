import requests
from bs4 import BeautifulSoup
import pandas as pd

def export_to_csv(data):
    my_df = pd.DataFrame(data)
    my_df.to_csv("property_data.csv", index=False, header=False)
    print("Created CSV File!")

def activate_scrapper():
    r = requests.get("https://www.century21.ca/search/Q-Vancouver%2C%20BC/49.384920633507456;-123.55725749844589;49.129925680308105;-122.6900242220787/v_Gallery")
    c = r.content
    soup = BeautifulSoup(c, "html.parser")
    all_listings = soup.find_all("div", {"class": "property-list-item"})

    res = []
    res.append(["Photo Link", "Listing ID", "Address", "Price", "Number of Beds", "Number of Baths", "Size (sqft)"])
    for i in range(0, len(all_listings)):
        row = []
        # Photo src
        photo = all_listings[i].find("a")
        row.append(photo.img["src"])

        # Posting ID
        id = all_listings[i].find("div", {"class": "list-mls-id"}).text
        row.append(id)

        # Address
        address = all_listings[i].find("span", {"class": "address-line-1"}).text + "," + all_listings[i].find("span", {"class": "address-line-2"}).text
        row.append(address)

        # Price
        price = all_listings[i].find("div", {"class": "list-price"}).text
        row.append(price)

        # Bed
        beds = all_listings[i].find("li", {"class": "beds"})
        if beds is not None:
            row.append(beds.text)
        else:
            row.append("N/A")

        # Baths
        baths = all_listings[i].find("li", {"class": "baths"})
        if baths is not None:
            row.append(baths.text)
        else:
            row.append("N/A")

        # Size
        sqft = all_listings[i].find("li", {"class": "sqft"})
        if sqft is not None:
            row.append(sqft.text)
        else:
            row.append("N/A")

        res.append(row)

    export_to_csv(res)

def main():
    print("Welcome to the Real Estate Scrapper tool")
    activate_scrapper()

if __name__ == "__main__":
    main()