from app.services.ai_service import analyze_with_ai


class MessageAgent:
    """
    AI Agent responsible for analyzing text messages.
    """

    def analyze(self, message: str):
        return analyze_with_ai(message)