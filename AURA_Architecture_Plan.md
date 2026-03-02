# AURA Profyle - Architecture Implementation Plan

This document details the architectural setup for the AURA (Authorized Unified Representation Assistant) project. The stack is chosen to maximize performance (especially voice inference), strictly partition the private admin layer from the public interface, and keep hosting/API costs at absolute zero by utilizing generously free developer tiers.

## Core Technology Stack

1.  **Frontend (Public Interface & Admin UI):** React 19 + Vite
    *   **Why:** Blazing fast hot-module replacement (HMR), minimal footprint, and ideal for building highly interactive, real-time voice interfaces.
    *   **Styling:** Tailwind CSS for a premium, clean, SaaS-level executive aesthetic.

2.  **Backend (API & Logic Layer):** FastAPI (Python)
    *   **Why:** One of the fastest Python frameworks available. Its native asynchronous support is crucial for streaming LLM responses and handling concurrent WebSockets or audio streams without blocking the main thread.
    *   **Server:** Uvicorn (ASGI server).

3.  **LLM Engine:** Groq (Llama 3 8B or 70B)
    *   **Why:** Groq provides the fastest LLM inference available globally (Language Processing Unit). For a voice assistant, lowering latency below 500ms is essential to avoid awkward, robotic pauses. Their free tier is extremely generous.

4.  **Database & Authentication:** Neon (Serverless PostgreSQL) + Clerk or JWT
    *   **Why:** Since AURA is a SaaS platform serving thousands of individual executives, we need a robust, relational database. Neon separates storage and compute, scaling perfectly to zero when not used, and supports `pgvector` for advanced AI memory. clerk can handle multi-tenant authentication seamlessly.

## Folder Structure

The project will be split into a strict frontend and backend structure:

```text
d:\profyl\
├── backend/                  # FastAPI Application
│   ├── app/
│   │   ├── main.py           # Application entry point, endpoints
│   │   ├── api/              # API routers (e.g., chat, audio)
│   │   ├── core/             # Configuration, Groq integration logic
│   │   └── models/           # Data models (Pydantic schemas)
│   ├── requirements.txt      # Python dependencies
│   └── .env                  # Secrets (Groq API Key, Supabase Keys)
│
├── frontend/                 # React + Vite Application
│   ├── src/
│   │   ├── components/       # Reusable UI elements (Chat, AudioPlayer)
│   │   ├── pages/            # Public Portfolio & Admin Dashboard
│   │   ├── lib/              # API client to communicate with backend
│   │   └── App.jsx           # Main React component
│   ├── package.json          # Node dependencies
│   ├── tailwind.config.js    # Tailwind configuration
│   └── vite.config.js        # Vite configuration
│
└── README.md                 # Project documentation
```

## Security & Partitioning Strategy

To ensure zero hallucination, strict adherence to the persona, and complete protection of the executive's knowledge:

1.  **The Private Layer (Admin):**
    *   Only authorized users (secured via Supabase Auth) can access the `/admin` route on the frontend.
    *   The admin dashboard allows the executive to update their approved "Persona Prompt" in the Supabase database.
2.  **The Public Layer (Consumer):**
    *   Public visitors interact with the React interface.
    *   When they speak or type, the frontend sends the query to the FastAPI backend.
    *   **The Guardrail:** The FastAPI backend securely fetches the master "Persona Prompt" directly from Supabase, appends the user's string, and sends it to Groq. The frontend *never* sees or holds the master prompt or any API keys.

## Implementation Steps (Phase 1: Foundation)

### Step 1: Backend Initialization (FastAPI)
1.  Create the `backend` directory.
2.  Set up a Python virtual environment (`python -m venv venv`).
3.  Install core dependencies: `pip install fastapi uvicorn groq python-dotenv pydantic`.
4.  Scaffold `main.py` with a simple health check endpoint.
5.  Implement the `/chat` route that connects to the Groq API and strictly enforces the system prompt.

### Step 2: Frontend Initialization (React + Vite)
1.  Create the `frontend` directory using `npm create vite@latest . -- --template react`.
2.  Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer; npx tailwindcss init -p`.
3.  Set up the global CSS for the premium executive aesthetic.
4.  Build a minimal chat interface component to test communication with the FastAPI backend.

### Step 3: Integration
1.  Configure CORS in FastAPI to accept requests from the Vite dev server (typically `http://localhost:5173`).
2.  Ensure end-to-end communication: User types in React -> Request sent to FastAPI -> FastAPI queries Groq -> Response streams back to React.

## Future Phases (Voice)
*   **Phase 2:** Implement Web Speech API for native, free text-to-speech handling Hindi pronunciation.
*   **Phase 3:** Tie Supabase Authentication to the Admin panel to hardcode the system memory.
