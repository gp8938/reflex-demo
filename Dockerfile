## Multi-stage build for Reflex app on Azure App Service (Linux Container)
# Base builder image
FROM python:3.13-slim AS builder

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100

WORKDIR /app

# System deps
RUN apt-get update && apt-get install -y build-essential curl && rm -rf /var/lib/apt/lists/*

# Copy only dependency manifests first (better layer caching)
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt --prefix /install

# Runtime image
FROM python:3.13-slim AS runtime
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
WORKDIR /app

# Copy installed site-packages from builder
COPY --from=builder /install /usr/local

# Copy application source
COPY rxconfig.py README.md ./
COPY sample_reflex ./sample_reflex
COPY assets ./assets

# Expose the default Reflex port (can override with PORT env in Azure)
EXPOSE 3000

# Healthcheck (optional lightweight TCP check)
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD python -c "import socket,sys; s=socket.socket(); \
  s.settimeout(2); \
  (s.connect(('127.0.0.1',3000)) and sys.exit(0)) if True else sys.exit(1)" || exit 1

# Azure App Service looks for a listening process; start Reflex in production mode.
# Use environment variable REFLEX_ENV=prod to disable dev features.
ENV REFLEX_ENV=prod

# Startup command; override in App Service Configuration if needed.
CMD ["python", "-m", "reflex", "run", "--env", "prod"]
