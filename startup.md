# AURA Profyle - Startup Guide

This document provides instructions for collaborators to successfully bootstrap and run both the Frontend and Backend of the AURA Profyle SaaS application.

The project is split into two distinct directories:
1.  **`frontend/`**: React 19 + Vite + Tailwind CSS
2.  **`backend/`**: FastAPI (Python) + Uvicorn

---

## 1. Starting the Backend (FastAPI)

The backend relies on Python and a Virtual Environment to manage its dependencies (like `fastapi`, `groq`, and `uvicorn`).

### Step-by-Step Installation:
1.  Open your terminal and navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Create a virtual environment (if one doesn't exist):
    ```bash
    python -m venv venv
    ```
3.  Activate the virtual environment:
    *   **Windows:** `.\venv\Scripts\activate`
    *   **Mac/Linux:** `source venv/bin/activate`
4.  Install the required dependencies from the `requirements.txt` file:
    ```bash
    pip install -r requirements.txt
    ```

### Running the Server:
Once the virtual environment is activated and dependencies are installed, run the development server:
```bash
uvicorn app.main:app --reload --port 8000
```
*The API will now be accessible at `http://localhost:8000`.*

---

## 2. Starting the Frontend (React + Vite)

The frontend relies on Node.js and NPM to handle its ecosystem.

### Step-by-Step Installation:
1.  Open a **new** terminal window and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install all required Node dependencies (like React, Vite, and Tailwind):
    ```bash
    npm install
    ```

### Running the Server:
Start the high-speed Vite development server:
```bash
npm run dev
```
*The UI will now be accessible at `http://localhost:5173`. It is pre-configured to communicate with the FastAPI backend on port 8000.*
