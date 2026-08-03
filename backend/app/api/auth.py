from fastapi import APIRouter

from app.schemas.auth_schema import (
    SignupRequest,
    LoginRequest,
    AuthResponse,
)

from app.services.auth_service import (
    signup_user,
    login_user,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)
# ---------------- Signup ----------------

@router.post(
    "/signup",
    response_model=AuthResponse,
)
def signup(request: SignupRequest):

    return signup_user(
        request.name,
        request.email,
        request.password,
    )

# ---------------- Login ----------------

@router.post(
    "/login",
    response_model=AuthResponse,
)
def login(request: LoginRequest):

    return login_user(
        request.email,
        request.password,
    )