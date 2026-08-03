from pydantic import BaseModel
from typing import Optional, List


# ---------------- Message Scan ----------------

class MessageScanRequest(BaseModel):
    message: str


class MessageScanResponse(BaseModel):

    score: int
    riskLevel: str
    confidence: int

    category: Optional[str] = None
    explanation: Optional[str] = None
    recommendation: Optional[str] = None

    threats: List[str] = []



# ---------------- URL Scan ----------------

class URLScanRequest(BaseModel):
    url: str


class URLScanResponse(BaseModel):

    score: int
    riskLevel: str
    confidence: int

    category: Optional[str] = None
    explanation: Optional[str] = None
    recommendation: Optional[str] = None

    threats: List[str] = []



# ---------------- Image Scan ----------------

class ImageScanResponse(BaseModel):

    score: int
    riskLevel: str
    confidence: int

    category: Optional[str] = None
    explanation: Optional[str] = None
    recommendation: Optional[str] = None

    threats: List[str] = []

    extracted_text: Optional[str] = ""



# ---------------- Voice Scan ----------------

class VoiceScanResponse(BaseModel):

    score: int
    riskLevel: str
    confidence: int

    category: Optional[str] = None
    explanation: Optional[str] = None
    recommendation: Optional[str] = None

    threats: List[str] = []

    transcript: Optional[str] = ""