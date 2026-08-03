from app.database.database import users_collection
from app.utils.password import hash_password, verify_password
from app.utils.jwt_handler import create_token


def signup_user(name, email, password):

    existing = users_collection.find_one({"email": email})

    if existing:
        return {
            "success": False,
            "message": "Email already registered",
            "token": None,
        }

    hashed = hash_password(password)

    users_collection.insert_one({
        "name": name,
        "email": email,
        "password": hashed,
    })

    token = create_token({"email": email})

    return {
        "success": True,
        "message": "Signup successful",
        "token": token,
    }


def login_user(email, password):

    user = users_collection.find_one({"email": email})

    if not user:
        return {
            "success": False,
            "message": "User not found",
            "token": None,
        }

    if not verify_password(password, user["password"]):
        return {
            "success": False,
            "message": "Invalid password",
            "token": None,
        }

    token = create_token({"email": email})

    return {
        "success": True,
        "message": "Login successful",
        "token": token,
    }