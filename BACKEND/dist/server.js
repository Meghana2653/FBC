"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 4000);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:3000";
app.use((0, cors_1.default)({ origin: frontendOrigin }));
app.use(express_1.default.json());
const enquirySchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(2),
    company: zod_1.z.string().trim().min(2),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().trim().min(7),
    service: zod_1.z.string().trim().optional(),
    message: zod_1.z.string().trim().min(10)
});
const aiRequestSchema = zod_1.z.object({
    prompt: zod_1.z.string().trim().min(3).max(4000)
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
        const data = await aiResponse.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) {
            response.status(502).json({ error: "Google AI returned an empty response." });
            return;
        }
        response.json({ text });
    }
    catch {
        response.status(502).json({ error: "Unable to reach Google AI." });
    }
});
app.listen(port, () => {
    console.log(`FBC IT backend listening on http://localhost:${port}`);
});
