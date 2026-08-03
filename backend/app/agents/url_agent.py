from app.services.ai_service import analyze_with_ai


class URLAgent:

    def analyze(self, url: str):

        prompt = f"""
You are a cybersecurity expert.

Analyze this URL.

URL:
{url}

Determine whether it is:

- Safe
- Suspicious
- Phishing
- Malware
- Fake Login
- Scam Website

Return ONLY JSON.

{{
    "risk_score": 0,
    "risk_level": "",
    "category": "",
    "explanation": "",
    "recommendation": ""
}}
"""

        return analyze_with_ai(prompt)