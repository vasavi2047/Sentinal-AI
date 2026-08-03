from app.agents.orchestrator import SentinelOrchestrator

orchestrator = SentinelOrchestrator()


def analyze_message(message: str):
    return orchestrator.analyze_message(message)


def analyze_url(url: str):
    return orchestrator.analyze_url(url)


def analyze_image(image_path: str):
    return orchestrator.analyze_image(image_path)


def analyze_voice(audio_path: str):
    return orchestrator.analyze_voice(audio_path)