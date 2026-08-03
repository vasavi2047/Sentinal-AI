import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    APP_NAME = os.getenv("APP_NAME", "Sentinel AI")
    APP_VERSION = os.getenv("APP_VERSION", "1.0.0")
    ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

    # MongoDB
    DATABASE_URL = os.getenv(
        "DATABASE_URL",
        "mongodb://localhost:27017"
    )

    DATABASE_NAME = os.getenv(
        "DATABASE_NAME",
        "sentinel_ai"
    )

    # JWT
    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "SentinelAI@2026SecureKey123"
    )


settings = Settings()