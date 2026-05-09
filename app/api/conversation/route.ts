import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.GROQ_API_KEY) {
      return new NextResponse("GROQ API Key is not configured", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

const response = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages,
});
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error(`CONVERSATION_ERROR: ${error}`);
    return new NextResponse("Internal error", { status: 500 });
  }
}
