# FBC IT Backend

Small Express API for local development and future deployment.

## Run

```powershell
cd Backend
npm install
npm run dev
```

The API runs on `http://localhost:4000` by default.

- `GET /api/health` checks that the service is running.
- `POST /api/enquiries` validates contact enquiries.
- `POST /api/ai/assist` sends a prompt to Gemini through the server.

Copy `.env.example` to `.env` and set `GOOGLE_AI_API_KEY` with the key from Google AI Studio. Never put this key in the frontend, commit it to GitHub, or expose it in client-side JavaScript.

The SQL contract is in `../Database/schema.sql`. Persistence and email delivery should be connected before production. Vercel deployment of the frontend does not automatically deploy this folder; deploy it separately or move the API into `Frontend/app/api`.
