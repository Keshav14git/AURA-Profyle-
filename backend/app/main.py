from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AURA Profyle API")

# Configure CORS for the React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "AURA Profyle API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
