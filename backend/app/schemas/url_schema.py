from pydantic import BaseModel


class URLRequest(BaseModel):
    url: str


class URLResponse(BaseModel):
    risk_score: int
    risk_level: str
    category: str
    explanation: str
    recommendation: str