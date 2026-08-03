import whisper

from app.services.ai_service import analyze_with_ai


class VoiceAgent:

    def __init__(self):
        self.model = None

    def analyze(self, audio_path: str):

        # Load the model only the first time Voice Scan is used
        if self.model is None:
            self.model = whisper.load_model("base")

        result = self.model.transcribe(audio_path)

        transcript = result["text"]

        prompt = f"""
You are a cybersecurity expert.

Analyze this phone conversation transcript.

Transcript:

{transcript}

Detect:
- Bank fraud
- OTP scam
- KYC scam
- Investment fraud
- Lottery scam
- Customer support scam

Return ONLY JSON.
"""

        response = analyze_with_ai(prompt)

        response["transcript"] = transcript

        return response