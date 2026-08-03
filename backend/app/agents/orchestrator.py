from app.agents.message_agent import MessageAgent
from app.agents.url_agent import URLAgent
from app.agents.image_agent import ImageAgent
from app.agents.voice_agent import VoiceAgent
from app.agents.risk_agent import RiskAgent

class SentinelOrchestrator:


    def __init__(self):

        self.message_agent = MessageAgent()

        self.url_agent = URLAgent()

        self.image_agent = ImageAgent()

        self.voice_agent = VoiceAgent()

        self.risk_agent = RiskAgent()


    def analyze_message(self, message: str):

        result = self.message_agent.analyze(message)

        return self.risk_agent.aggregate(
            [result]
        )

    def analyze_url(self, url: str):

        result = self.url_agent.analyze(url)

        return self.risk_agent.aggregate(
            [result]
        )

    def analyze_image(self, image_path: str):

        result = self.image_agent.analyze(image_path)

        return self.risk_agent.aggregate(
            [result]
        )


    def analyze_voice(self, audio_path: str):

        result = self.voice_agent.analyze(audio_path)

        return self.risk_agent.aggregate(
            [result]
        )


    def aggregate_results(self, results:list):

        return self.risk_agent.aggregate(results)