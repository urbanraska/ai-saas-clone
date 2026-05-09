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
    const { prompt, amount=1, resolution="512x512"  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.GROQ_API_KEY) {
      return new NextResponse("GROQ API Key is not configured", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }
    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const response = await groq.images.generate({
      prompt,
      n: parseInt(amount,10),
      size:resolution
    });
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(`IMAGE_ERROR: ${error}`);
    return new NextResponse("Internal error", { status: 500 });
  }
}
