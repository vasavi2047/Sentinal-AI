import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Gemini model
model = genai.GenerativeModel("gemini-2.0-flash")

def analyze_with_gemini(message: str):

    prompt = f"""
You are Sentinel AI, a cybersecurity expert.

Analyze the following message for scams.

Message:
{message}

Return ONLY valid JSON.

Format:

{{
    "risk_score": 85,
    "risk_level": "High",
    "category": "Phishing",
    "explanation": "Explain why this message is risky.",
    "recommendation": "Give safety advice."
}}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    # Remove markdown if Gemini returns ```json ... ```
    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()
    elif text.startswith("```"):
        text = text.replace("```", "").strip()

    return json.loads(text)