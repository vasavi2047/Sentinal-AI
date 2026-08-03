from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.schemas.scan_schema import (
    MessageScanRequest,
    MessageScanResponse,
    URLScanRequest,
    URLScanResponse,
    ImageScanResponse,
    VoiceScanResponse
)

from app.services.scan_service import (
    analyze_message,
    analyze_url,
    analyze_image,
    analyze_voice
)

router = APIRouter(
    prefix="/scan",
    tags=["Scan APIs"]
)


# ---------------- Message Scan ----------------

@router.post(
    "/message",
    response_model=MessageScanResponse
)
async def scan_message(request: MessageScanRequest):
    return analyze_message(request.message)


# ---------------- URL Scan ----------------

@router.post(
    "/url",
    response_model=URLScanResponse
)
async def scan_url(request: URLScanRequest):
    return analyze_url(request.url)


# ---------------- Image Scan ----------------

@router.post(
    "/image",
    response_model=ImageScanResponse
)
async def scan_image(file: UploadFile = File(...)):

    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)

    file_path = os.path.join(upload_dir, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return analyze_image(file_path)


# ---------------- Voice Scan ----------------

@router.post(
    "/voice",
    response_model=VoiceScanResponse
)
async def scan_voice(file: UploadFile = File(...)):

    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)

    file_path = os.path.join(upload_dir, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return analyze_voice(file_path)