from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class UserModel(BaseModel):
    id: str
    email: str
    name: str
    role: str
    created_at: datetime
    last_login: Optional[datetime] = None

class SessionModel(BaseModel):
    id: str
    user_id: str
    token: str
    created_at: datetime
    expires_at: datetime

class OAuthProvider(BaseModel):
    provider: str
    client_id: str
    redirect_uri: str