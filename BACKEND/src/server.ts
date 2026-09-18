import "dotenv/config";
import cors from "cors";
import express from "express";
import { z } from "zod";

const app = express();
const port = Number(process.env.PORT ?? 4000);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:3000";

app.use(cors({ origin: frontendOrigin }));
app.use(express.json());

const enquirySchema = z.object({
  name: z.string().trim().min(2),
  company: z.string().trim().min(2),
  email: z.string().email(),
  phone: z.string().trim().min(7),
  service: z.string().trim().optional(),
  message: z.string().trim().min(10)
});

const aiRequestSchema = z.object({
  prompt: z.string().trim().min(3).max(4000)
});

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "fbc-it-backend" });
});

app.post("/api/enquiries", (request, response) => {
  const result = enquirySchema.safeParse(request.body);
  if (!result.success) {
    response.status(400).json({ error: "Please provide valid enquiry details.", fields: result.error.flatten().fieldErrors });
    return;
  }

  // Database persistence and email delivery can be connected using DATABASE_URL and Resend.
  response.status(201).json({ message: "Enquiry received.", enquiry: result.data });
});

app.post("/api/ai/assist", async (request, response) => {
  const result = aiRequestSchema.safeParse(request.body);
  if (!result.success) {
    response.status(400).json({ error: "Please provide a prompt between 3 and 4000 characters." });
    return;
  }

  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    response.status(503).json({ error: "Google AI is not configured on the server." });
    return;
  }

  try {
    const aiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: result.data.prompt }] }] })
    });

    if (!aiResponse.ok) {
      response.status(502).json({ error: "Google AI could not complete the request." });
      return;
    }

    const data = await aiResponse.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      response.status(502).json({ error: "Google AI returned an empty response." });
      return;
    }

    response.json({ text });
  } catch {
    response.status(502).json({ error: "Unable to reach Google AI." });
  }
});

app.listen(port, () => {
  console.log(`FBC IT backend listening on http://localhost:${port}`);
});
