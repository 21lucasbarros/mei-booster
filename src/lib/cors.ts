import { NextResponse } from "next/server";

export function corsHeaders(origin?: string) {
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    "https://mei-booster.vercel.app",
    "https://mei-booster.com",
    "https://www.mei-booster.com",
  ];

  const isAllowed = origin && allowedOrigins.includes(origin);

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0],
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

export function handleCors(request: Request) {
  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders(origin || undefined),
    });
  }

  return null;
}
