import os
import json
from dotenv import load_dotenv
from groq import Groq

# Load environment variables
load_dotenv()

print("Groq Key Loaded:", os.getenv("GROQ_API_KEY"))

# Initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

MODEL = "llama-3.3-70b-versatile"


def analyze_with_ai(message: str):
    prompt = f"""
You are Sentinel AI, a cybersecurity expert.

Analyze the following message and determine whether it is a scam.

Message:
{message}

Return ONLY valid JSON in this format:

{{
    "risk_score": 85,
    "risk_level": "High",
    "category": "Phishing",
    "explanation": "Explain why this message is risky.",
    "recommendation": "Give safety advice."
}}
"""

    try:
        print("Sending request to Groq...")

        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert cybersecurity AI."
                },
                {
                    "role": "user",
                    "content": prompt
                },
            ],
            temperature=0.2,
        )

        print("Groq response received.")

        text = response.choices[0].message.content.strip()
        print(text)

        # Remove markdown code fences if present
        if text.startswith("```json"):
            text = text.replace("```json", "").replace("```", "").strip()
        elif text.startswith("```"):
            text = text.replace("```", "").replace("```", "").strip()

        return json.loads(text)

    except Exception as e:
        print("Groq Error:", e)
        raise