# Notification System

A small notification app split into two parts:

- `notification_app_fe`: React + Vite frontend
- `notification_app_be`: Express backend that proxies requests to the evaluation service

## Run it

1. Start the backend:

```bash
cd notification_app_be
npm install
npm run dev
```

2. Start the frontend:

```bash
cd notification_app_fe
npm install
npm run dev
```

## Environment

The backend needs a `BEARER_TOKEN` in `notification_app_be/.env`.
The frontend uses `VITE_BEARER_TOKEN` in `notification_app_fe/.env`.

## Notes

The frontend talks to `http://localhost:5000`, so the backend must be running first.
