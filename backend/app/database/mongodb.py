from motor.motor_asyncio import AsyncIOMotorClient

from app.config.settings import settings


client = AsyncIOMotorClient(settings.DATABASE_URL)

database = client[settings.DATABASE_NAME]