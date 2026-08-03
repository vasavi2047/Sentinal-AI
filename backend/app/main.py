from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.settings import settings

# API Routers
from app.api.scan import router as scan_router
from app.api.auth import router as auth_router


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="AI Powered Digital Public Safety Intelligence Platform"
)

# ---------------- CORS ----------------

app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)

# ---------------- Register API Routers ----------------

app.include_router(scan_router)

app.include_router(auth_router)


# ---------------- Home ----------------

@app.get("/")

def home():

    return {

        "application": settings.APP_NAME,

        "version": settings.APP_VERSION,

        "status": "Running Successfully",

    }

# ---------------- Health Check ----------------
@app.get("/health")

def health():

    return {

        "status": "healthy",

        "environment": settings.ENVIRONMENT,

    }