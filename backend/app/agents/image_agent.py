from PIL import Image
import pytesseract
import cv2
import numpy as np

from app.services.ai_service import analyze_with_ai


# Mac Homebrew Tesseract path
# Windows Tesseract path
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


class ImageAgent:

    def analyze(self, image_path: str):

        try:

            # Load image
            image = cv2.imread(image_path)


            if image is None:
                raise Exception("Image cannot be loaded")


            # Convert to grayscale
            gray = cv2.cvtColor(
                image,
                cv2.COLOR_BGR2GRAY
            )


            # Resize image (improves OCR)
            gray = cv2.resize(
                gray,
                None,
                fx=2,
                fy=2
            )


            # Remove noise
            gray = cv2.GaussianBlur(
                gray,
                (5,5),
                0
            )


            # Threshold
            _, processed = cv2.threshold(
                gray,
                0,
                255,
                cv2.THRESH_BINARY + cv2.THRESH_OTSU
            )


            # OCR
            extracted_text = pytesseract.image_to_string(
                processed,
                config="--oem 3 --psm 6"
            )


            extracted_text = extracted_text.strip()


            print("===================")
            print("OCR TEXT:")
            print(extracted_text)
            print("===================")



            if extracted_text == "":
                extracted_text = "No text detected from image"



            prompt = f"""

You are a cybersecurity expert.

Analyze this extracted image text:

{extracted_text}


Identify possible threats:

- Fake payment screenshot
- Fake bank message
- Fake UPI receipt
- Fake KYC request
- Job scam
- Lottery scam
- Courier scam


Return ONLY JSON:

{{
"score":90,
"riskLevel":"High",
"confidence":95,
"category":"Phishing",
"explanation":"Reason",
"recommendation":"Safety advice",
"threats":["Phishing"]
}}

"""


            result = analyze_with_ai(prompt)


            result["extracted_text"] = extracted_text


            return result



        except Exception as e:

            print("IMAGE ERROR:",e)

            return {

                "score":0,
                "riskLevel":"Unknown",
                "confidence":0,
                "category":"Error",
                "explanation":str(e),
                "recommendation":"",
                "threats":[],
                "extracted_text":""

            }