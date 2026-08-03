from pydantic import BaseModel


class VoiceResponse(BaseModel):
    transcript: str
    risk_score: int
    risk_level: str
    category: str
    explanation: str
    recommendation: str