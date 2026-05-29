import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

// GET /api/status — return all pump statuses
export async function GET() {
  try {
    const all = await redis.hgetall("pump-statuses");
    return NextResponse.json(all ?? {});
  } catch {
    return NextResponse.json({});
  }
}

// POST /api/status — save a new status report
export async function POST(request: Request) {
  try {
    const { name, status } = await request.json();
    if (!name || !status) {
      return NextResponse.json({ error: "Missing name or status" }, { status: 400 });
    }
    const date = new Date().toLocaleDateString("de-DE");
    await redis.hset("pump-statuses", { [name]: { status, date } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
