from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("DATABASE_URL")

client = MongoClient(MONGO_URL)

db = client["sentinel_ai"]

users_collection = db["users"]