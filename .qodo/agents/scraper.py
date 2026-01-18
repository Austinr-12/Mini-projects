import requests
from bs4 import BeautifulSoup

headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.5"
}

def get_product_details(product_url: str) -> dict:
  # Create an empty product details dictionary
  product_details = {}
  
  # Get the product page content and create a soup
  page = requests.get(product_url, headers=headers)
  soup = BeautifulSoup(page.content, features="lxml")