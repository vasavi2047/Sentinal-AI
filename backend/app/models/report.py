from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class Report(BaseModel):
    type: str
    risk_score: int
    risk_level: str
    category: str
    date: Optional[datetime] = datetime.utcnow()