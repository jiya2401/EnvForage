# Local Development Setup Guide — Ollama & Seed Service

With the integration of local LLMs and structured YAML seed services, setting up
the local development environment requires a few extra steps. This guide helps
new contributors get up and running quickly.

---

## 1. Prerequisites

| Requirement | Minimum Version | Link |
|-------------|----------------|------|
| Python | 3.10+ | [python.org](https://www.python.org/downloads/) |
| Docker | 24.0+ | [docker.com](https://www.docker.com/get-started/) |
| Docker Compose | 2.0+ | Bundled with Docker Desktop |
| Ollama | Latest | [ollama.com/download](https://ollama.com/download) |
| Git | 2.40+ | [git-scm.com](https://git-scm.com/) |

---

## 2. Pull the Required LLM Model

After installing Ollama from [ollama.com/download](https://ollama.com/download):

### Linux / WSL
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows
Download and run the installer from [ollama.com/download](https://ollama.com/download).

### Start Ollama server and pull the model

**Step 1 — Start the Ollama server (keep this running in a separate terminal):**
```bash
ollama serve
```

**Step 2 — In a new terminal, pull the required model:**
```bash
ollama pull llama3
```

**Step 3 — Verify the model is available:**
```bash
ollama list
```

> **Note:** `ollama run llama3` starts an interactive chat session and is optional for interactive testing only. It is not required for backend integration.

---

## 3. Set Up Python Virtual Environment & Install Dependencies

```bash
# Start the database first
docker-compose up -d

cd backend

# Create virtual environment
python -m venv .venv

# Activate — Linux/WSL
source .venv/bin/activate

# Activate — Windows
.venv\Scripts\activate

# Install all dependencies
pip install -e ".[dev]"

# Run migrations
alembic upgrade head
```

---

## 4. Test the Seed Service Locally

Run the seed service:
```bash
python -m app.services.seed_service
```

Example valid YAML payload to test with:
```yaml
profile_id: pytorch-cuda
python_version: "3.11"
cuda_version: "12.1"
target_os: LINUX
packages:
  - name: torch
    version: "2.0.0"
    cuda_variant: cu121
  - name: numpy
    version: "1.24.0"
    cuda_variant: null
```

Expected output:
✓ Profile loaded: pytorch-cuda
✓ Packages seeded: 2
✓ Seed service completed successfully

## Common Issues

### `ollama: command not found`
Restart your terminal after installing Ollama, or add it to your PATH manually.

### `docker-compose: connection refused`
Make sure Docker Desktop is running before executing `docker-compose up -d`.

### `ModuleNotFoundError` after pip install
Make sure your virtual environment is activated — you should see `(.venv)` in your terminal prompt.

### Ollama model download is slow
The `llama3` model is ~4GB. Use a stable internet connection. For a smaller/faster download, consider using a smaller variant if available.
---

## Related Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — System design overview
- [FEATURES.md](./FEATURES.md) — Implemented features
- [TESTING.md](./TESTING.md) — Testing guidelines
- [AI_LAYER.md](./AI_LAYER.md) — Local LLM integration details