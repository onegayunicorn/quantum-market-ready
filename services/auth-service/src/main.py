from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .handlers import auth

app = FastAPI(title="Quantum Auth Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["authentication"])

@app.get("/health")
async def health():
    return {"status": "operational", "service": "auth"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8082)